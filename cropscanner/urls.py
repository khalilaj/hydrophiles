from rest_framework import routers
from .api import CropScannerViewset

router = routers.DefaultRouter()
router.register('api/cropscanner', CropScannerViewset, 'cropscanner')

urlpatterns = router.urls