from rest_framework import viewsets, permissions
from .models import SystemCrop
from .serializer import SystemCropSerializer

class SystemCropViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = SystemCropSerializer

    def get_queryset(self):
        return  SystemCrop.objects.filter(owner=self.request.user) 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)