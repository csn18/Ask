from requests import Response
from rest_framework import viewsets
from Apps.Users.serializers import UserSerializer
from Apps.Users.models import CustomUser
from rest_framework.response import Response
from rest_framework.authtoken.models import Token


class UsersList(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class GetUserByToken(viewsets.ViewSet):
    def list(self, request):
        user_id = Token.objects.get(key=request.query_params.get('auth-token')).user.id
        queryset = CustomUser.objects.get(id=user_id)
        serializer = UserSerializer(queryset, context={'request': request})
        return Response(serializer.data)
