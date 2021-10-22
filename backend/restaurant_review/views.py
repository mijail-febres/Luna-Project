from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant_review.models import RestaurantReview
from restaurant_review.permissions import IsAuthorOrAdminOrReadOnly
from restaurant_review.serializers import RestaurantReviewSerializer


class CreateRestaurantReviewView(CreateAPIView):
    """
    post:
    Create a new Review for a Restaurant by including the ID of the Restaurant in the url.
    """
    serializer_class = RestaurantReviewSerializer

    def post(self, request, *args, **kwargs):
        restaurant = get_object_or_404(Restaurant, pk=kwargs['restaurant_id'])
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=self.request.user, reviewed_restaurant=restaurant)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ListRestaurantReviewByRestaurantIDView(ListAPIView):
    """
    get:
    List all Reviews for a Restaurant by including the ID of the Restaurant in the url.
    """
    serializer_class = RestaurantReviewSerializer
    queryset = RestaurantReview.objects.all()

    def get_queryset(self):
        return RestaurantReview.objects.filter(reviewed_restaurant_id=self.kwargs['restaurant_id'])


class ListRestaurantReviewsByUserIDView(ListAPIView):
    """
    get:
    List all Reviews by a User by including the ID of the User in the url.
    """
    serializer_class = RestaurantReviewSerializer
    queryset = RestaurantReview.objects.all()

    def get_queryset(self):
        return RestaurantReview.objects.filter(author_id=self.kwargs['user_id'])


class RetrieveUpdateDeleteRestaurantReviewView(RetrieveUpdateDestroyAPIView):
    """
    get:
    List a restaurant by id
    patch:
    Update a restaurant by id. Only the owner or an admin can perform this action.
    delete:
    Delete a restaurant by id. Only the owner or an admin can perform this action.
    """
    queryset = RestaurantReview.objects.all()
    serializer_class = RestaurantReviewSerializer
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsAuthorOrAdminOrReadOnly]


class ToggleLikeRestaurantReviewView(GenericAPIView):
    """
    post:
    Like/unlike a Review by ID.
    """
    queryset = RestaurantReview.objects.all()
    serializer_class = RestaurantReviewSerializer
    lookup_url_kwarg = 'review_id'
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        review = self.get_object()
        if request.user not in review.review_liked_by.all():
            review.review_liked_by.add(request.user)
        else:
            review.review_liked_by.remove(request.user)
        return Response(self.get_serializer(review).data)


class ListLikedReviewsByCurrentUserView(ListAPIView):
    """
    get:
    List all liked reviews of the currently logged in user.
    """
    serializer_class = RestaurantReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user:
            return RestaurantReview.objects.filter(review_liked_by__exact=user)


class ListCommentedReviewsByCurrentUserView(ListAPIView):
    """
    get:
    List all reviews the currently logged in user commented on.
    """
    serializer_class = RestaurantReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user:
            return RestaurantReview.objects.filter(comments__author_comment__exact=user)


class ListAllReviewsView(ListAPIView):
    """
    get:
    List all reviews.
    """
    serializer_class = RestaurantReviewSerializer
    queryset = RestaurantReview.objects.all()
