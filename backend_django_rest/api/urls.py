from django.urls import path, include
from . import views
from .views import TestViewSet
from rest_framework import routers


router = routers.SimpleRouter()
router.register(r'test', TestViewSet)


urlpatterns = [
    path('', include(router.urls)), #http://127.0.0.1:8000/test/
    path('pop_movies/', views.pop_movies, name='movies'),
    path('pop_movies/<str:pk>', views.pop_movies, name='movies_pk'),    
    path('pop_people/', views.pop_piple, name='piple'),
    path('pop_people/<str:pk>', views.pop_piple, name='piple_pk'),
    path('registration/', views.register, name='registration'),
    path('login/', views.loginView, name='login'),
    path('logout/', views.logout_view, name='logout'),    
]