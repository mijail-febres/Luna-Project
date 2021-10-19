from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):
    profile_picture_url = serializers.SerializerMethodField()

    def get_profile_picture_url(self, obj):
        try:
            domain_name = 'https://luna-dhmp.propulsion-learn.ch'
            full_path = domain_name + obj.profile_picture.url
            return full_path
        except Exception:
            return None

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'profile_picture', 'location', 'description',
                  'date_joined', 'things_user_likes', 'profile_picture_url']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['profile_picture'] = representation.pop('profile_picture_url')
        return representation


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # The default result (access/refresh tokens)
        data = super(CustomTokenObtainPairSerializer, self).validate(attrs)
        # Custom data you want to include
        data.update({'user': ProfileSerializer(self.user, context=self.context, many=False).data})
        return data
