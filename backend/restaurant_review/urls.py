from django.urls import path

from restaurant_review.views import CreateRestaurantReviewView, ListRestaurantReviewByRestaurantIDView, \
    ListRestaurantReviewsByUserIDView, RetrieveUpdateDeleteRestaurantReviewView, ToggleLikeRestaurantReviewView, \
    ListLikedReviewsByCurrentUserView, ListCommentedReviewsByCurrentUserView, ListAllReviewsView

urlpatterns = [
    path('new/<int:restaurant_id>/', CreateRestaurantReviewView.as_view()),
    path('restaurant/<int:restaurant_id>/', ListRestaurantReviewByRestaurantIDView.as_view()),
    path('user/<int:user_id>/', ListRestaurantReviewsByUserIDView.as_view()),
    path('<int:review_id>/', RetrieveUpdateDeleteRestaurantReviewView.as_view()),
    path('like/<int:review_id>/', ToggleLikeRestaurantReviewView.as_view()),
    path('likes/', ListLikedReviewsByCurrentUserView.as_view()),
    path('comments/', ListCommentedReviewsByCurrentUserView.as_view()),
    path('all/', ListAllReviewsView.as_view()),
]
