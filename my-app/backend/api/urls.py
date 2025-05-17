from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet, HelloAPI

router = DefaultRouter()
router.register('notes', NoteViewSet, basename='notes')

urlpatterns = [
    path('hello/', HelloAPI.as_view(), name='hello_api'),
    path('', include(router.urls)),
]