from ecommApp import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes, name='Routes'),
    path('products/', views.get_products, name='products'),
    path('view-products/', views.get_all_products, name='view-products'),
    path('product/<str:pk>', views.get_product, name='product')
   
]
