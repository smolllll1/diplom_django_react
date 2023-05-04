from django.urls import path, include
from . import views
from .views import PeopleViewSet, MoviesViewSet, pop_people
from rest_framework import routers


router = routers.SimpleRouter()
router.register(r'pop_movies', MoviesViewSet)
router.register(r'pop_people', PeopleViewSet)


urlpatterns = [
    path('', include(router.urls)), #http://127.0.0.1:8000/
    path('test/', views.search_tast, name='test'),
    path('add_movies/', views.pop_movies, name='movies'),
    path('add_movies/<str:pk>', views.pop_movies, name='movies_pk'),    
    path('add_people/', views.pop_people, name='people'),
    path('add_people/<str:pk>', views.pop_people, name='people_pk'),
    path('registration/', views.register, name='registration'),
    path('login/', views.loginView, name='login'),
    path('logout/', views.logout_view, name='logout'), 
    path('search/', views.search, name='search'),   
]