from rest_framework import serializers
from rest_framework.authtoken.models import Token

from Apps.Users.serializers import UserSerializer


class TokenSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Token
        fields = ['user', 'key']
