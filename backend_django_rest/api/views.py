from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
import requests
import json
from .models import Test
from .serializers import NoteSerializer

# Create your views here.

@api_view(['GET'])
def getTest(request):
    notes = Test.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTes(request, pk):
    param = requests.GET.get('id')

    notes = Test.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def pop_movies(request, pk=1):
    apiRequst = requests.get(f'https://api.themoviedb.org/3/movie/popular?api_key=4b9514bc01000261f03dfb9e5e317db3&language=en-US&page={pk}')
    json_data = json.loads(apiRequst.content)
    title = json_data.get('results')
    return Response(json_data)

@api_view(['GET'])
def pop_piple(request, pk=1):
    apiRequst = requests.get(f'https://api.themoviedb.org/3/person/popular?api_key=4b9514bc01000261f03dfb9e5e317db3&language=en-US&page={pk}')
    json_data = json.loads(apiRequst.content)
    title = json_data.get('results')
    return Response(title)
