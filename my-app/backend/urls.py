from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/', include('app.urls')),  # <-- add this
    path('app/hello/', views.HelloAPI.as_view(), name='hello_api'),

]