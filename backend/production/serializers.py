from rest_framework import serializers
from .models import Production

class ProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Production
        fields = ['id', 'patient_id', 'prescription_id', 'medication_id', 'patient_last_name', 'patient_dob',
            'prescription_generic_name', 'prescription_dosage', 
          ]
        depth = 1

        