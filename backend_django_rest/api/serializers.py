from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Test, Registration

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'