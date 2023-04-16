from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('test/', views.getTest, name='test'),
    path('test/<str:pk>', views.getTes, name='tes'),
]