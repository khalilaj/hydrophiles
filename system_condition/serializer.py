from .models import SystemCondition
from rest_framework import serializers

class SystemConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemCondition
        fields = '__all__'