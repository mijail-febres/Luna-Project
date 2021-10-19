from rest_framework import serializers

from restaurant.models import Restaurant
from user.serializers import ProfileSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        try:
            domain_name = 'https://luna-dhmp.propulsion-learn.ch'
            full_path = domain_name + obj.image.url
            return full_path
        except Exception:
            return None

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'category', 'country', 'city', 'street', 'zip', 'website', 'phone', 'email',
                  'opening_hours', 'price_level', 'image', 'created', 'owner', 'image_url']
        read_only_fields = ['owner']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['owner'] = ProfileSerializer(instance.owner, many=False, context=self.context).data
        representation['image'] = representation.pop('image_url')
        return representation
