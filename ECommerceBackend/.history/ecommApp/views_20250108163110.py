from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from .products import products
from .models import *
from .serializer import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status

# for sending mails and generate token 
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from .utils import TokenGenerator, generate_token
from django.core.mail import EmailMessage
from django.conf import settings
from django.utils.encoding import force_bytes, force_text, DjangoUnicodeDecodeError
from django.views.generic import View

# Create your views here.
# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)

#         # Add custom claims
#         token['username'] = user.username
#         token['email'] = user.email

#         return token
    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer=UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v       
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer

class ActivateAccountView(View):
    def get(sel, request, uidb64, token):
        try:
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)

        except Exception as identifier:
            user = None
        if user is not None and generate_token.check_token(user, token):
            user.is_active = True
            user.save()
            return Response(request, "activateSuccess.html")
        
        else:
            return render(request, "activateFail.html")

# ------------ User Registration ------   
@api_view(['POST'])
def register_user(request):
    data=request.data
    print(request.data)
    try:
        print(data)
        if User.objects.filter(email=data['email']).exists():
            return Response({"detail": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)
        
        user= User.objects.create(
            first_name=data['fname'], 
            last_name=data['lname'], 
            username=data['email'], 
            email=data['email'],
            password=make_password(data['password']),
            is_active=False)
      
        # generate token for sending mail
        email_subject="Activate Your Account"
        message=render_to_string(
            "activate.html",
           {
            'user':user,
            'domain':'127.0.0.1:8000',
            'uid':urlsafe_base64_encode(force_bytes(user.pk)),
            'token':generate_token.make_token(user)
           }

        )
        print(user)
        email_message=EmailMessage(email_subject,message,settings.EMAIL_HOST_USER,[data['email']])
        email_message.send()
        serialize=UserSerializerWithToken(user,many=False)
        return Response(serialize.data)
    except Exception as e:
        message={'details':e}
        print(e)
        return Response(message,status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_users(request):
    user = User.objects.all()
    serializer = UserSerializer(user, many=False) 
    return Response(serializer.data) 

    
@api_view(['GET']) 
@permission_classes([IsAdminUser])  
def get_user_profiles(request):
    user = request.user
    serializer = UserSerializer(user, many=False) 
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