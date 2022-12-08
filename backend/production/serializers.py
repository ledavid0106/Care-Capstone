from rest_framework import serializers
from .models import Production

class ProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Production
        fields = ['id', 'patient_id', 'patient', 'prescription_id', 'prescription', 'medication_id', 'medication', 'patient_last_name', 'patient_dob',
            'prescription_generic_name', 'prescription_dosage', 
          ]
        depth = 1
    patient_id = serializers.IntegerField(write_only=True)
    prescription_id = serializers.IntegerField(write_only=True)
    medication_id = serializers.IntegerField(write_only=True)

        