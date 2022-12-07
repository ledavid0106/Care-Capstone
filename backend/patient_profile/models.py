from django.db import models
from django.db.models import Model
from authentication.models import User

class Patient(models.Model):
    first_name = models.CharField(max_length=255)
    middle_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    sex = models.CharField(max_length=255)
    dob = models.DateField(max_length=8) 
    # age = models.IntegerField()
    weight = models.IntegerField()
    height = models.IntegerField()
    allergies = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

    def __str__(self):
         return self.first_name + " " + self.last_name
