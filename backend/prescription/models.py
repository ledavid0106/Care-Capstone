from django.db import models
from patient_profile.models import Patient
import uuid

# Create your models here.
class Prescription(models.Model):
    # id = models.IntegerField(primary_key=True)
    active = models.BooleanField()
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, )
    patient_first_name = models.CharField(max_length=255)
    patient_middle_name = models.CharField(max_length=255)
    patient_last_name = models.CharField(max_length=255)
    patient_dob = models.DateField(max_length=8) 
    generic_name = models.CharField(max_length=255)
    ndc = models.CharField(max_length=255)
    dosage = models.CharField(max_length=255)
    vessel = models.CharField(max_length=255)
    volume = models.CharField(max_length=255)
    sig = models.CharField(max_length=255)
    frequency = models.CharField(max_length=255)
    route = models.CharField(max_length=255)
    ordering_doctor = models.CharField(max_length=255)
    ordering_doctor_phone_number = models.CharField(max_length=255)
    indication = models.CharField(max_length=255)
    verified = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
         return f"{self.id}" + " " + self.generic_name + " " + f"{self.patient_last_name}"

