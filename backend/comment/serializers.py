from rest_framework import serializers

from comment.models import Comment
from user.serializers import ProfileSerializer


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text_content', 'created', 'author_comment', 'commented_review']
        read_only_fields = ['author_comment', 'commented_review']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author_comment'] = ProfileSerializer(instance.author_comment, many=False,
                                                             context=self.context).data
        return representation
