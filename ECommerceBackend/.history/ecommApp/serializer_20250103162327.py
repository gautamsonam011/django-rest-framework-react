from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Products

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        models: Products
        fields: '__all__'