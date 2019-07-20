from rest_framework import routers
from .api import SystemViewset

router = routers.DefaultRouter()
router.register('api/system', SystemViewset, 'system')

urlpatterns = router.urls