from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

from rest_framework.views import APIView
# from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework.response import Response  # optionally use this

class HelloAPI(APIView):
    def get(self, request):
        return JsonResponse({"message": "first api call"})