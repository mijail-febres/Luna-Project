from django.contrib.auth import get_user_model
from django.db import models

from restaurant.models import Restaurant

User = get_user_model()


class RestaurantReview(models.Model):
    rating_choices = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5)
    ]

    text_content = models.CharField(max_length=1000)
    rating = models.IntegerField(choices=rating_choices, default=1)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='restaurant_reviews')
    reviewed_restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, related_name='reviews')
    review_liked_by = models.ManyToManyField(to=User, related_name='liked_reviews', blank=True)

    def __str__(self):
        return f'ID {self.id}: Restaurant review by {self.author}'
