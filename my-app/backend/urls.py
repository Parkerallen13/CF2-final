from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # <-- add this
    path('api/hello/', views.HelloAPI.as_view(), name='hello_api'),

]