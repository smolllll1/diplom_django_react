from django.db import models

# Create your models here.
class Test(models.Model):
    bodu = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.bodu[0:50]