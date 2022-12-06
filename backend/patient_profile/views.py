from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Patient
from rest_framework import status
from .serializers import PatientSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_patient_profile(request):
    if request.method == "GET":
        patients = Patient.objects.all()
        serializer = PatientSerializer(patients, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_patient_profile(request, pk):
    if request.method == "GET":
        profile = Patient.objects.all().filter(id=pk)
        serializer = PatientSerializer(profile, many=True)
        return Response(serializer.data)

@api_view([ 'POST'])
@permission_classes([IsAuthenticated])
def add_patient_profile(request):
    if request.method == "POST":
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)