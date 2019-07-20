from django.db import models
from django.contrib.auth.models import User 


# Create your models here.
class System(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True) 
    system_name = models.CharField(max_length=255, blank=True, null=True)
    system_photo = models.ImageField(upload_to='system_photos', verbose_name="system-logo", name=None, blank=True)
    system_description = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True,blank=True, null=True )
    updated_on = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    
    class Meta:
        verbose_name = ('system')
        verbose_name_plural = ('systems')

    def __str__(self):
        return "<System system_name={} owner={}>".format(self.system_name, self.owner)

    