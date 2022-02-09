from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from Apps.Users.models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['id', 'username', 'gender', 'age']

    fieldsets = (
        ('Custom  fields', {
            'fields': (
                'age',
                'gender',
                'photo'
            )
        }),
        ('Data', {
            'fields': ('username', 'password')
        }),
        ('Personal info', {
            'fields': ('first_name', 'last_name', 'email')
        }),
        ('Permissions', {
            'fields': (
                'is_active', 'is_staff', 'is_superuser',
                'groups', 'user_permissions'
            )
        }),
        ('Important dates', {
            'fields': ('last_login', 'date_joined')
        }),
    )
