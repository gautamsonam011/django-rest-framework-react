from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products
from .models import *
from .serializer import *

# Create your views here.

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