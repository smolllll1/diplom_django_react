from rest_framework import serializers
from .models import Test, Registration, People
from django.contrib.auth.models import User

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'

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
