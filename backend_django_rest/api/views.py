from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

import requests
import json
from .models import Test
from .serializers import NoteSerializer, RegisterSerializer, LoginSerializer

# Create your views here.

class TestViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                  # mixins.DestroyModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
     queryset = Test.objects.all()
     serializer_class = NoteSerializer

# @api_view(['GET'])
# def cdgetTest(request):
#     notes = Test.objects.all()
#     serializer = NoteSerializer(notes, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def getTes(request, pk):
#     param = requests.GET.get('id')

#     notes = Test.objects.get(id=pk)
#     serializer = NoteSerializer(notes, many=False)
#     return Response(serializer.data)

@api_view(['POST'])
def register(request):
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')

    user_exists = User.objects.filter(username=name).exists()
    if user_exists:
        return Response({'message': 'Користувач з такими даними вже існує!'})
    else:
        user = User.objects.create_user(name, email, password)
        user.save()
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            data['id'] = user.id
        return Response({'registrationRespons': data})

@api_view(['POST'])
def loginView(request):
        username = request.data.get('name')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                userRespons = request.user
                serializer = LoginSerializer(userRespons)
                return Response({'loginRespons': serializer.data})
            else:
                return Response({'message': 'Disabled account'})
        else:
            return Response({'message': 'Invalid login'})
        
@api_view(['GET'])
def logout_view(request):
	logout(request)
	return Response({'message': 'Logout!'})



@api_view(['GET'])
def pop_movies(request, pk=1):
    apiRequst = requests.get(f'https://api.themoviedb.org/3/movie/popular?api_key=4b9514bc01000261f03dfb9e5e317db3&language=en-US&page={pk}')
    json_data = json.loads(apiRequst.content)

    return Response(json_data)

@api_view(['GET'])
def pop_piple(request, pk=1):
    apiRequst = requests.get(f'https://api.themoviedb.org/3/person/popular?api_key=4b9514bc01000261f03dfb9e5e317db3&language=en-US&page={pk}')
    json_data = json.loads(apiRequst.content)
    return Response(json_data)
