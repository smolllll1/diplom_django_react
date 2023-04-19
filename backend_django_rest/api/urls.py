from django.urls import path
from . import views

urlpatterns = [
    path('', views.getTest, name='routes'),
    path('pop_movies/', views.pop_movies, name='movies'),
    path('pop_movies/<str:pk>', views.pop_movies, name='movies_pk'),    
    path('pop_piple/', views.pop_piple, name='piple'),
    path('pop_piple/<str:pk>', views.pop_piple, name='piple_pk'),

]