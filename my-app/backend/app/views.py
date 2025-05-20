from django.http import JsonResponse
import datetime

# Create your views here.

from rest_framework import viewsets
from rest_framework.views import APIView

from .models import Note, Recipe
from .serializers import NoteSerializer, RecipeSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class hello_api(APIView):
    def get(self, request):
        return JsonResponse({"message": "first api call"})
    
class TimeApi(APIView):
    def get(self, request):
        now = datetime.datetime.now()
        return JsonResponse({
            "current-time": now.strftime("%A, %B %d. %I:%M %P")
        })
    
class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    
