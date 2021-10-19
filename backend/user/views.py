from rest_framework_simplejwt.views import TokenObtainPairView

from user.serializers import CustomTokenObtainPairSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    # Replace the serializer with your custom
    serializer_class = CustomTokenObtainPairSerializer
