from rest_framework import serializers

from Apps.Users.models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    photo = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
            'gender',
            'age',
            'photo',
        ]

    def get_photo(self, queryset):
        request = self.context.get('request')
        photo = queryset.photo.url
        return request.build_absolute_uri(photo)
