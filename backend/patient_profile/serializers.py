from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['first_name', 'middle_name', 'last_name', 'sex', 'dob', 'weight', 'height', 'allergies', 'email']
        depth = 1