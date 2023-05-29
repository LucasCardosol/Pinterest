from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Image
from .serializers import ImageSerializer
from rest_framework.response import Response
from rest_framework import viewsets

@api_view(['GET'])
def getImages(request):
    images = Image.objects.all()
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getImage(request,id):
    image = Image.objects.get(_id=id)
    serializer = ImageSerializer(image, many=False)
    return Response(serializer.data)

class ImagemViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer