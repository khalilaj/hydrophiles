from rest_framework import viewsets, permissions
from .models import System
from .serializer import SystemSerializer

class SystemViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SystemSerializer

    def get_queryset(self):
        return  System.objects.filter(owner=self.request.user) 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)