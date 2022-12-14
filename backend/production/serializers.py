from rest_framework import serializers
from .models import Production

class ProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Production
        fields = ['id', 'patient_id', 'patient', 'prescription_id', 'prescription', 'ndc', 
            'prescription_generic_name', 'prescription_dosage', 'lot_number', 'expiration', 'verified'
          ]
        depth = 1
    patient_id = serializers.IntegerField(write_only=True)
    prescription_id = serializers.IntegerField(write_only=True)
 

        