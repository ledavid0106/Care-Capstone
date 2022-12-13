from django.db import models
from prescription.models import Prescription 
from patient_profile.models import Patient
from medication.models import Medication


# Create your models here.
class Production(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    prescription = models.ForeignKey(Prescription, on_delete=models.CASCADE)
    ndc = models.CharField(max_length=255)    
    prescription_generic_name = models.CharField(max_length=255)
    prescription_dosage = models.CharField(max_length=255)
    lot_number = models.CharField(max_length=255)
    expiration = models.DateField(max_length=8) 


    def __str__(self):
         return f"{self.id} Rx: {self.patient} {self.prescription}"

