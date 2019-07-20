from rest_framework import routers
from .api import SystemConditionViewset

router = routers.DefaultRouter()
router.register('api/systemcondition', SystemConditionViewset, 'systemcondition')

urlpatterns = router.urls