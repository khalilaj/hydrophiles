from .models import CropScanner
from rest_framework import serializers

class CropScannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropScanner
        fields = '__all__'