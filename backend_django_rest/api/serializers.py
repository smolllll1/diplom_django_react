from rest_framework.serializers import ModelSerializer
from .models import Test, Registration

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'

class RegisterSerializer(ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'