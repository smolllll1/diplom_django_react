from rest_framework.serializers import ModelSerializer
from .models import Test

class NoteSerializer(ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'