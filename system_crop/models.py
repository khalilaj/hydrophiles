from django.db import models 
from django.contrib.auth.models import User
from system.models import System

class SystemCrop(models.Model): 
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    system = models.ForeignKey(System,  on_delete=models.CASCADE, null=True)
    system_crop_name = models.CharField(max_length=100)
    system_seedlings_amount = models.CharField(max_length=100, blank=True) 
    system_crop_photo = models.ImageField(upload_to='system_crop_photos', verbose_name="system-crop-logo", name=None, blank=True)
    system_crop_description = models.CharField(max_length=255,  blank=True)
    created_at = models.DateTimeField(auto_now=True,  blank=True)
    updated_on = models.DateTimeField(auto_now_add=True,  blank=True)

    class Meta:
        verbose_name = ('systemcrop')
        verbose_name_plural = ('systemcrops')

    def __str__(self):
        return "<SystemCrop system_crop_name={} owner={}>".format(self.system_crop_name, self.owner)