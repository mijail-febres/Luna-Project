from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


def restaurant_directory_path(instance, filename):
    return f'restaurant/{instance.owner.id}/{filename}'


class Restaurant(models.Model):
    price_level_choices = [
        (1, '$'),
        (2, '$$'),
        (3, '$$$'),
        (4, '$$$$'),
        (5, '$$$$$')
    ]

    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=100)
    zip = models.CharField(max_length=30)
    website = models.CharField(max_length=200, blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=100)
    opening_hours = models.CharField(max_length=100)
    price_level = models.IntegerField(choices=price_level_choices, default=1)
    image = models.ImageField(upload_to=restaurant_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='my_restaurants')

    def __str__(self):
        return f'ID {self.id}: Restaurant owned by {self.owner}'
