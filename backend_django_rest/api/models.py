from django.db import models

# Create your models here.
class Test(models.Model):
    title = models.TextField(null=True, blank=True)
    popularity = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title