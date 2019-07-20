from rest_framework import viewsets, permissions
from .models import SystemPump
from .serializer import SystemPumpSerializer

class SystemPumpViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SystemPumpSerializer

    def get_queryset(self):
        return  SystemPump.objects.filter(owner=self.request.user) 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)