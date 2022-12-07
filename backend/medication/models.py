from django.db import models

# from medication.models import Medication


# Create your models here.
class Medication(models.Model):
    generic_name = models.CharField(max_length=255)
    ndc = models.CharField(max_length=255)
    dosage = models.CharField(max_length=255)


    def __str__(self):
         return f"{self.generic_name} {self.dosage}"

