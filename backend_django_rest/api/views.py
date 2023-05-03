from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework import viewsets, mixins
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError, AuthenticationFailed, NotAuthenticated
from backend_django_rest import key
import requests
import json
from .models import People, Test
from .serializers import RegisterSerializer, LoginSerializer, PeopleSerializer, NoteSerializer

# Create your views here.

class DataPagination(PageNumberPagination):
    page_size = 20
    page_size_query_param = 'page_size'
    max_page_size = 100

class TestViewSet(viewsets.ModelViewSet):
     queryset = Test.objects.all()
     serializer_class = NoteSerializer
     pagination_class = DataPagination    

class PeopleViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                  # mixins.DestroyModelMixin,
                   mixins.ListModelMixin,
                   viewsets.GenericViewSet):
     queryset = People.objects.all()
     serializer_class = PeopleSerializer
     pagination_class = DataPagination

@api_view(['POST'])
def register(request):
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')

    user_exists = User.objects.filter(username=name).exists()
    if user_exists:
        return ValidationError({'message': 'A user with such data already exists!'})
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
                return AuthenticationFailed({'message': 'Disabled account'})
        else:
            return AuthenticationFailed({'message': 'Invalid login'})
        
@api_view(['GET'])
def logout_view(request):
	logout(request)
	return NotAuthenticated({'message': 'Logout!'})



@api_view(['GET'])
def pop_movies(request, pk=1):
    apiRequst = requests.get(f'https://api.themoviedb.org/3/movie/popular?api_key={key.api_key}&language=en-US&page={pk}')
    json_data = json.loads(apiRequst.content) 
    return Response(json_data)

@api_view(['GET'])
def pop_people(request, pk=1):
    apiRequst = requests.get(f'https://api.themoviedb.org/3/person/popular?api_key={key.api_key}&language=en-US&page={pk}')
    json_data = json.loads(apiRequst.content)
    results_data = json_data.get('results')

    for item_data in results_data:
        serializer = PeopleSerializer(data=item_data)
        known_for = item_data.get('known_for')
        people_data = People.objects.filter(known_for=known_for).exists()
        if serializer.is_valid() and not people_data:
            serializer.save()
        else:
             pass
    return Response(json_data)

# @api_view(['POST'])
# def search_tast(request):


@api_view(['POST'])
def search(request):
    message = request.data.get('message')
    apiRequst = requests.get(f'https://api.themoviedb.org/3/search/movie?api_key={key.api_key}&query={message}')
    json_data = json.loads(apiRequst.content)
    return Response(json_data)
    # return Response(json_data.get("results"))
