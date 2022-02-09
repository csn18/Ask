from django.shortcuts import render

from Apps.Users.models import CustomUser


def main_page(request):
    users = CustomUser.objects.all()

    return render(request, 'Main/main_page.html', locals())