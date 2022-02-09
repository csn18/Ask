from django.urls import path, include
from rest_framework import routers

from Apps.Users.api import UsersList

router = routers.DefaultRouter()
router.register(r'users', UsersList)

urlpatterns = [
    path('', include(router.urls))
]
