from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products
from .models import *
from .serializer import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email

        return token
    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = ProfileSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data        

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

def get_users(request):
    pass
    
@api_view(['GET'])   
def get_user_profiles(request):
    user = request.user
    serializer = ProfileSerializer(user, many=False) 
    return Response(serializer.data) 

def getRoutes(request):
    return JsonResponse("Hello", safe=False)

@api_view(['GET'])
def get_products(request):
    return Response(products)

@api_view(['GET'])
def get_all_products(request):
    products = Products.objects.all()
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_product(request, pk):
    product = Products.objects.get(_id = pk)
    serializer = ProductsSerializer(product, many=False)
    return Response(serializer.data)