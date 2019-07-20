from django.db import models 
from django.contrib.auth.models import User
from system.models import System

class SystemPump(models.Model): 
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    system = models.ForeignKey(System,  on_delete=models.CASCADE, null=True)  
    pump_status = models.BooleanField(default=False, null=True)
    pump_name = models.CharField(max_length=100, blank=True, null=True) 
    pump_photo = models.ImageField(upload_to='system_crop_pump', null=True, verbose_name="system-pump-logo", name=None, blank=True)
    pump_description = models.CharField(max_length=255,  blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True,  blank=True, null=True)
    updated_on = models.DateTimeField(auto_now_add=True,  blank=True, null=True)

    class Meta:
        verbose_name = ('systempump')
        verbose_name_plural = ('systempumps')

    def __str__(self):
        return "<SystemPump pump_name={} owner={}>".format(self.pump_name, self.owner)
   