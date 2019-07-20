from rest_framework import routers
from .api import SystemCropViewset

router = routers.DefaultRouter()
router.register('api/systemcrop', SystemCropViewset, 'system-crop')

urlpatterns = router.urls