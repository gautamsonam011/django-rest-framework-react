from ecommApp import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes, name='Routes'),
    path('products/', views.get_products, name='products'),
   
]
