from django.urls import path, include

from Apps.Users.views import profile, login_user, register, logout_user

urlpatterns = [
    path('', profile, name='profile'),
    path('login/', login_user, name='login'),
    path('register/', register, name='register'),
    path('logout/', logout_user, name='logout')

]
