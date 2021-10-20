from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, GenericAPIView
from rest_framework.response import Response

from comment.models import Comment
from comment.serializers import CommentSerializer
from restaurant_review.models import RestaurantReview


class CreateCommentView(CreateAPIView):
    """
    post:
    Create a new Comment for a Review by including the ID of the review in the url.
    """
    serializer_class = CommentSerializer

    def post(self, request, *args, **kwargs):
        review = get_object_or_404(RestaurantReview, pk=kwargs['review_id'])
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author_comment=self.request.user, commented_review=review)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ListCommentsByUserIDView(ListAPIView):
    """
    get:
    List all comments by User ID by including the ID in the url.
    """
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

    def get_queryset(self):
        return Comment.objects.filter(author_comment=self.kwargs['user_id'])


class DeleteCommentView(GenericAPIView):
    """
    delete:
    Delete comment by passing the Comment ID in the url.
    """
    serializer_class = CommentSerializer

    def delete(self, request, *args, **kwargs):
        comment = get_object_or_404(Comment, pk=kwargs['comment_id'])
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
