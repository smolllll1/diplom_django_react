from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRouters, name='routes')
]