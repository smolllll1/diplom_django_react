from rest_framework import serializers
from .models import Test, Registration

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Registration
        fields = ['id', 'name', 'email', 'password']