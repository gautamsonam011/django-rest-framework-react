from ecommApp import views
from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView)

urlpatterns = [
    path('', views.getRoutes, name='Routes'),
    path('products/', views.get_products, name='products'),
    path('view-products/', views.get_all_products, name='view-products'),
    path('product/<str:pk>', views.get_product, name='product'),
    path('users/', views.get_users, name='user'),
    path('api/users/register/', views.register_user, name='register_user'),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.get_user_profiles, name="profiles"),
    path('activate/<uidb64>/<token>/', views.ActivateAccountView.as_view(), name='activate'),
   
]
