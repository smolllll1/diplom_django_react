from django.urls import path, include
from . import views

urlpatterns = [
    path('1/', views.getTest, name='routes'),
    path('pop_movies/', views.pop_movies, name='movies'),
    path('pop_movies/<str:pk>', views.pop_movies, name='movies_pk'),    
    path('pop_people/', views.pop_piple, name='piple'),
    path('pop_people/<str:pk>', views.pop_piple, name='piple_pk'),
    path('registration/', views.register, name='registration'),
    path('login/', views.loginView, name='login'),
    path('logout/', views.logout_view, name='logout'),    
]