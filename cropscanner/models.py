from django.db import models
from django.contrib.auth.models import User 

# Create your models here.
class CropScanner(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True) 
    crop_results = models.CharField(max_length=255, blank=True, null=True)
    crop_photo = models.ImageField(upload_to='crop_photos', verbose_name="crop-logo", name=None, blank=True)
    created_at = models.DateTimeField(auto_now=True,blank=True, null=True )
    updated_on = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        verbose_name = ('cropscanner')
        verbose_name_plural = ('cropscanners')

    def __str__(self):
        return "<CropScanner owner={} created_at={}>".format(self.owner, self.created_at)

    