from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.db.models import Q

from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
from restaurant_review.models import RestaurantReview
from restaurant_review.serializers import RestaurantReviewSerializer
from user.serializers import CustomTokenObtainPairSerializer, ProfileSerializer, SearchSerializer

User = get_user_model()


class RetrieveUpdateDeleteProfileView(GenericAPIView):
    """
    get:
    Get own profile
    patch:
    Update own profile
    delete:
    Delete your own profile
    """
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)
        return Response(self.get_serializer(user).data)

    def patch(self, request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)
        serializer = self.get_serializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_200_OK)

    def delete(self, request, *args, **kwargs):
        user = User.objects.get(id=request.user.id)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ListAllUsersView(ListAPIView):
    """
    get:
    List all users. Search: Filter for username by passing a string.
    The search is case insensitive and returns all of the users containing this string in either their username,
    their first name or their last name
    Syntax for searching - ?search=<str:search_string>/
    """
    queryset = User.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self):
        search_string = self.request.query_params.get('search')
        if search_string:
            return User.objects.filter(Q(username__icontains=search_string) | Q(first_name__icontains=search_string) |
                                       Q(last_name__icontains=search_string))
        return User.objects.all()


class SpecificUserView(RetrieveAPIView):
    """
    get:
    Get specific user profile by ID passed in the url
    """
    queryset = User.objects.all()
    serializer_class = ProfileSerializer
    lookup_url_kwarg = 'user_id'


class CustomTokenObtainPairView(TokenObtainPairView):
    # Replace the serializer with your custom
    serializer_class = CustomTokenObtainPairSerializer


class SearchView(GenericAPIView):
    """
    post:
    Search for either Restaurants, Reviews or Users.
    Your JSON body must include only 2 lines: type and search_string
    The type should be either restaurants, reviews or users
    The search_string is whatever you want to search for
    """
    serializer_class = SearchSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            if serializer.validated_data['type'].lower() == 'restaurants':
                restaurants = Restaurant.objects.filter(name__icontains=serializer.validated_data['search_string'])
                return Response(RestaurantSerializer(restaurants, many=True, context={'request': request}).data)
            elif serializer.validated_data['type'].lower() == 'reviews':
                reviews = RestaurantReview.objects.filter(
                    text_content__icontains=serializer.validated_data['search_string'])
                return Response(RestaurantReviewSerializer(reviews, many=True, context={'request': request}).data)
            elif serializer.validated_data['type'].lower() == 'users':
                users = User.objects.filter(Q(username__icontains=serializer.validated_data['search_string']) |
                                            Q(first_name__icontains=serializer.validated_data['search_string']) |
                                            Q(last_name__icontains=serializer.validated_data['search_string']))
                return Response(ProfileSerializer(users, many=True, context={'request': request}).data)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)
