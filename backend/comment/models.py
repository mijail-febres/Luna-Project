from django.contrib.auth import get_user_model
from django.db import models

from restaurant_review.models import RestaurantReview

User = get_user_model()


class Comment(models.Model):
    text_content = models.CharField(max_length=1000)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    author_comment = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='comments')
    commented_review = models.ForeignKey(to=RestaurantReview, on_delete=models.CASCADE, related_name='comments')
    comment_liked_by = models.ManyToManyField(to=User, related_name='liked_comments', blank=True)

    def __str__(self):
        return f'ID {self.id}: Comment by {self.author_comment} for review {self.commented_review}'
