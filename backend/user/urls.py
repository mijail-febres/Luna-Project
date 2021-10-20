from django.urls import path

from user.views import ListAllUsersView, SpecificUserView

urlpatterns = [
    path('', ListAllUsersView.as_view()),
    path('<int:user_id>/', SpecificUserView.as_view()),
]
