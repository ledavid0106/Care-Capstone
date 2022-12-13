from rest_framework import serializers
from .models import Prescription

class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ['id', 'active', 'patient_id','patient', 'patient_first_name',
            'patient_middle_name', 'patient_last_name', 'patient_dob',
            'generic_name', 'ndc', 'dosage', 'vessel', 'volume',
             'sig', 'frequency', 'route', 
            'ordering_doctor', 'ordering_doctor_phone_number',
            'indication',
          ]
        depth = 1
    patient_id = serializers.IntegerField(write_only=True)

        