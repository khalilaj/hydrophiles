from rest_framework import viewsets, permissions
from .models import CropScanner
from .serializer import CropScannerSerializer

class CropScannerViewset (viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = CropScannerSerializer

    def get_queryset(self):
        return  CropScanner.objects.filter(owner=self.request.user) 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)