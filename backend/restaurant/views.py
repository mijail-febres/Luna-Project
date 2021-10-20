from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.permissions import IsOwnerOrAdminOrReadOnly
from restaurant.serializers import RestaurantSerializer


class ListRestaurantView(ListAPIView):
    """
    get:
    List all restaurants. No authorization needed
    """
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CreateRestaurantView(CreateAPIView):
    """
    post:
    Create a new restaurant.
    """
    serializer_class = RestaurantSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(owner=self.request.user, category=serializer.validated_data['category'].capitalize())
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ListRestaurantsByCategoryView(ListAPIView):
    """
    get:
    List all restaurants by category included in the url. No authorization needed
    """
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def get_queryset(self):
        return Restaurant.objects.filter(category__icontains=self.kwargs['category'])


class ListRestaurantsByOwnerView(ListAPIView):
    """
    get:
    List all restaurants by owner id included in the url. No authorization needed
    """
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def get_queryset(self):
        return Restaurant.objects.filter(owner_id=self.kwargs['user_id']).order_by('-created')


class RetrieveUpdateDeleteRestaurantView(RetrieveUpdateDestroyAPIView):
    """
    get:
    List a restaurant by id
    patch:
    Update a restaurant by id. Only the owner or an admin can perform this action.
    delete:
    Delete a restaurant by id. Only the owner or an admin can perform this action.
    """
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'id'
    permission_classes = [IsOwnerOrAdminOrReadOnly]


class HomeView(ListAPIView):
    """
    get:
    List the four best rated Restaurants.
    """
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        sorted_restaurants = sorted(serializer.data, key=lambda d: d['rating_sum'], reverse=True)
        return Response(sorted_restaurants[:4])
