from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.views.static import serve
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')), 
    path('', include('accounts.urls')),
    path('', include('system.urls')),
    path('', include('system_crop.urls')),
    path('', include('system_condition.urls')),
    path('', include('system_pump.urls')),
    path('', include('cropscanner.urls')), 
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
