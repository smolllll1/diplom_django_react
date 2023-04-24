from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class Test(models.Model):
    title = models.TextField(null=True, blank=True)
    popularity = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Registration(models.Model):

    email_validator = RegexValidator(regex='^\w+(_?\w*)*-?\w*(_?\w*)*@\w+(\.\w*)+$', message='xxxxxx@xxxxxx')
    phone_validator = RegexValidator(regex='^\+?3?8?0?\d{2}[ -]?(\d[ -]?){7}$',
									 message='the number should have the following format: +380xx xxx xx xx')
    name = models.TextField(max_length=100,blank=True)
    country = models.CharField(max_length=100)
    email = models.CharField(max_length=100, validators=(email_validator, ))
    phone = models.CharField(max_length=16, validators=(phone_validator, ))
    password = models.CharField(max_length=100)
    