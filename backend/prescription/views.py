from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Prescription
from rest_framework import status
from .serializers import PrescriptionSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_prescription(request):
    if request.method == "GET":
        rx = Prescription.objects.all()
        serializer = PrescriptionSerializer(rx, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_prescription(request, pk):
    if request.method == "GET":
        rx = Prescription.objects.all().filter(id=pk)
        serializer = PrescriptionSerializer(rx, many=True)
        return Response(serializer.data)


@api_view([ 'POST'])
@permission_classes([IsAuthenticated])
def add_new_prescription(request):
    if request.method == "POST":
        serializer = PrescriptionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def edit_prescription(request, prescription_id): 
    rx = get_object_or_404(Prescription, id=prescription_id)
    if request.method == 'PUT':
        serializer = PrescriptionSerializer(rx, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

