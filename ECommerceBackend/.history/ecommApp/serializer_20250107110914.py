from rest_framework import serializers
from .models import Products
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email']    

class ProfileSerializerWithToken(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)    
