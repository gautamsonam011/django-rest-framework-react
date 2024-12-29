from ecommApp import views
from django.urls import path

urlpatterns = [
    path('', views.getRoutes),
   
]
