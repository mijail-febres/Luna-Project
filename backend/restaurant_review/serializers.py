from rest_framework import serializers

from comment.serializers import CommentSerializer
from restaurant.serializers import RestaurantMiniSerializer
from restaurant_review.models import RestaurantReview
from user.serializers import ProfileSerializer


class RestaurantReviewSerializer(serializers.ModelSerializer):
    like_count = serializers.SerializerMethodField()
    is_liked_by_me = serializers.SerializerMethodField()

    def get_like_count(self, obj):
        return obj.review_liked_by.count()

    def get_is_liked_by_me(self, obj):
        if self.context['request'].user not in obj.review_liked_by.all():
            return False
        else:
            return True

    class Meta:
        model = RestaurantReview
        fields = ['id', 'text_content', 'rating', 'created', 'modified', 'like_count', 'is_liked_by_me', 'author',
                  'comments', 'reviewed_restaurant']
        read_only_fields = ['author', 'reviewed_restaurant', 'comments']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = ProfileSerializer(instance.author, many=False, context=self.context).data
        representation['reviewed_restaurant'] = RestaurantMiniSerializer(instance.reviewed_restaurant, many=False,
                                                                         context=self.context).data
        representation['comments'] = CommentSerializer(instance.comments, many=True, context=self.context).data
        return representation
