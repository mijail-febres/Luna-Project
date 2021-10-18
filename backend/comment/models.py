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
    liked_by_users = models.ManyToManyField(to=User, related_name='liked_reviews', blank=True, null=True)
