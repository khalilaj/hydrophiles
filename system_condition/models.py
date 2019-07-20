from django.db import models
from django.contrib.auth.models import User 

class SystemCondition(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True) 
    humidity_levels = models.FloatField(blank=True, null=True) 
    temp_levels = models.FloatField(blank=True, null=True) 
    ph_levels = models.FloatField(blank=True, null=True) 
    oxygen_levels = models.FloatField(blank=True, null=True) 
    created_at = models.DateTimeField(auto_now=True,blank=True, null=True )
    updated_on = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    class Meta:
        verbose_name = ('systemcondition')
        verbose_name_plural = ('systemconditions')

    def __str__(self):
        return "<SystemCondition created_at={} owner={}>".format(self.created_at, self.owner)

    
