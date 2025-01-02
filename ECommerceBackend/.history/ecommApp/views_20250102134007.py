from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products

# Create your views here.

def getRoutes(request):
    return JsonResponse("Hello", safe=False)

api_view(['GET'])
def get_products(request):
    return Response(products)
