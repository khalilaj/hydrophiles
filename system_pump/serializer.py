from .models import SystemPump
from rest_framework import serializers

class SystemPumpSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemPump
        fields = '__all__'