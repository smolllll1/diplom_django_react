from rest_framework import serializers
from .models import Test, Registration, People, Movies
from django.contrib.auth.models import User

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ['name', 'title']

class RegisterSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Registration
        fields = ['id', 'name', 'email', 'password']

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'date_joined']

class PeopleSerializer(serializers.ModelSerializer):
    class Meta:
        model = People
        fields = ['adult', 'gender', 'id', 'known_for', 'known_for_department', 'name', 'popularity', 'profile_path']


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ['adult', 'backdrop_path', 'genre_ids', 'id', 'original_language', 'original_title', 'overview', 'popularity', 'poster_path', 'release_date', 'title', 'video', 'vote_average', 'vote_count']