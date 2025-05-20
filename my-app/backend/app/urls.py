from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet, RecipeViewSet, hello_api, TimeApi

router = DefaultRouter()
router.register(r'notes', NoteViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('hello/', hello_api.as_view(), name='hello_api'),
    path('time/', TimeApi.as_view(), name='time_api'),
    path('', include(router.urls)),
]