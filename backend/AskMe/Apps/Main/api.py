from rest_framework import viewsets
from rest_framework.authtoken.models import Token

from Apps.Main.serializers import TokenSerializer


class TokensList(viewsets.ModelViewSet):
    queryset = Token.objects.all()
    serializer_class = TokenSerializer
