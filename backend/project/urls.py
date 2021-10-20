"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt import views as jwt_views

from restaurant.views import HomeView
from user.views import CustomTokenObtainPairView, RetrieveUpdateDeleteProfileView, SearchView

schema_view = get_schema_view(
    openapi.Info(
        title="Luna Project API",
        default_version='v0.3',
        description="Luna Restaurant Rating App API",
    ),
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('backend/api/auth/', include('registration_profile.urls')),
    path('backend/api/auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path('backend/api/restaurants/', include('restaurant.urls')),
    path('backend/api/reviews/', include('restaurant_review.urls')),
    path('backend/api/me/', RetrieveUpdateDeleteProfileView.as_view()),
    path('backend/api/users/', include('user.urls')),
    path('backend/api/review/comment/', include('comment.urls')),
    path('backend/api/search/', SearchView.as_view()),
    path('backend/api/home/', HomeView.as_view()),
]
