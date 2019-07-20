from rest_framework import viewsets, permissions
from .models import SystemCondition
from .serializer import SystemConditionSerializer

class SystemConditionViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SystemConditionSerializer

    def get_queryset(self):
        return  SystemCondition.objects.filter(owner=self.request.user) 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)