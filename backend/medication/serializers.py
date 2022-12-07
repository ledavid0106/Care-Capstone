from rest_framework import serializers
from .models import Medication

class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ['id', 'generic_name', 'ndc', 'dosage'
          ]
        depth = 1

        