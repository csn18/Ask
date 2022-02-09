from rest_framework import viewsets
from Apps.Users.serializers import UserSerializer
from Apps.Users.models import CustomUser


class UsersList(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
