from django.urls import path

from restaurant.views import ListRestaurantView, CreateRestaurantView, ListRestaurantsByCategoryView, \
    ListRestaurantsByOwnerView, RetrieveUpdateDeleteRestaurantView

urlpatterns = [
    path('', ListRestaurantView.as_view()),
    path('new/', CreateRestaurantView.as_view()),
    path('category/<str:category>/', ListRestaurantsByCategoryView.as_view()),
    path('user/<int:user_id>/', ListRestaurantsByOwnerView.as_view()),
    path('<int:id>/', RetrieveUpdateDeleteRestaurantView.as_view())
]
