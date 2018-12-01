from django.urls import path, include
from backend import views

urlpatterns = [
    path('users/check', views.check_user),
];