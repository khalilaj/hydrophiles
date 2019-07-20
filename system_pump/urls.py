from rest_framework import routers
from .api import SystemPumpViewset

router = routers.DefaultRouter()
router.register('api/systempump', SystemPumpViewset, 'systempump')

urlpatterns = router.urls