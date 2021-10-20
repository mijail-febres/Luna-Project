from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import GenericAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.db.models import Q

from user.serializers import CustomTokenObtainPairSerializer, ProfileSerializer

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
    List all users
    search: Filter for username by passing a string.
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
