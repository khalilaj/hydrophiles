from .models import SystemCrop
from rest_framework import serializers

class SystemCropSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemCrop
        fields = '__all__'