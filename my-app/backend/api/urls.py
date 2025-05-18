from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet, HelloAPI, TimeAPI

router = DefaultRouter()
router.register('notes', NoteViewSet, basename='notes')

urlpatterns = [
    path('hello/', HelloAPI.as_view(), name='hello_api'),
    path('', include(router.urls)),
    path('current-time', TimeAPI.as_view(), name='time')
]