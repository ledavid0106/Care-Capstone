from django.db import models
from prescription.models import Prescription 
from patient_profile.models import Patient
from medication.models import Medication


# Create your models here.
class Production(models.Model):
    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)
    prescription_id = models.ForeignKey(Prescription, on_delete=models.CASCADE)
    medication_id = models.ForeignKey(Medication, on_delete=models.CASCADE)
    patient_last_name = models.CharField(max_length=255)
    patient_dob = models.DateField(max_length=8)
    prescription_generic_name = models.CharField(max_length=255)
    prescription_dosage = models.CharField(max_length=255)


    def __str__(self):
         return f"{self.id} Rx: {self.prescription_generic_name} {self.prescription_dosage} {self.patient_last_name} {self.patient_dob}"

