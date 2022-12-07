from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Production
from .serializers import ProductionSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_all_Production(request):
    if request.method == "GET":
        qp = Production.objects.all()
        serializer = ProductionSerializer(qp, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_Production(request, pk):
    if request.method == "GET":
        qp = Production.objects.all().filter(id=pk)
        serializer = ProductionSerializer(qp, many=True)
        return Response(serializer.data)


@api_view([ 'POST'])
@permission_classes([IsAuthenticated])
def add_new_Production(request):
    if request.method == "POST":
        serializer = ProductionSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def edit_Production(request, production_id): 
    qp = get_object_or_404(Production, id=production_id)
    if request.method == 'PUT':
        serializer = ProductionSerializer(qp, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

