from django.db import models

# Create your models here.

class Image(models.Model):
    image = models.ImageField(null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self) :
        return str(self.image)