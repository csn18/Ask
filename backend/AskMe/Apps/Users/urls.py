from django.urls import path, include
from rest_framework import routers

from Apps.Users.api import UsersList, GetUserByToken

router = routers.DefaultRouter()
router.register(r'users-list', UsersList)
router.register(r'get-user', GetUserByToken, basename='getByToken')

urlpatterns = [
    path('v1/', include(router.urls))
]
