from rest_framework import serializers

from restaurant.models import Restaurant
from user.serializers import ProfileSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    rating_sum = serializers.SerializerMethodField()
    num_of_reviews = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        try:
            domain_name = 'https://luna-dhmp.propulsion-learn.ch'
            full_path = domain_name + obj.image.url
            return full_path
        except Exception:
            return None

    def get_rating_sum(self, obj):
        sum_of_ratings = 0
        for value in obj.reviews.values():
            sum_of_ratings += value['rating']
        if obj.reviews.count() != 0:
            final_rating = sum_of_ratings / obj.reviews.count()
            return round(final_rating, 1)
        else:
            return 0.0

    def get_num_of_reviews(self, obj):
        return obj.reviews.count()

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'rating_sum', 'num_of_reviews', 'category', 'country', 'city', 'street', 'zip',
                  'website', 'phone', 'email', 'opening_hours', 'price_level', 'image', 'created', 'owner', 'image_url']
        read_only_fields = ['owner']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['owner'] = ProfileSerializer(instance.owner, many=False, context=self.context).data
        representation['image'] = representation.pop('image_url')
        return representation


class RestaurantMiniSerializer(serializers.ModelSerializer):
    rating_sum = serializers.SerializerMethodField()
    num_of_reviews = serializers.SerializerMethodField()

    def get_rating_sum(self, obj):
        sum_of_ratings = 0
        for value in obj.reviews.values():
            sum_of_ratings += value['rating']
        if obj.reviews.count() != 0:
            final_rating = sum_of_ratings / obj.reviews.count()
            return round(final_rating, 1)
        else:
            return 0.0

    def get_num_of_reviews(self, obj):
        return obj.reviews.count()

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'rating_sum', 'num_of_reviews', 'category']
