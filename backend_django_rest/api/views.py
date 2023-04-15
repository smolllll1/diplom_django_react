from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def getRouters(request):
    return JsonResponse('Hello Api', safe=False)