from django.urls import path, include

from Apps.Users.views import profile, login_user, register, logout_user, add_question

urlpatterns = [
    path('<int:pk>/', profile, name='profile'),
    path('<int:pk>/add/', add_question, name='add'),
    path('login/', login_user, name='login'),
    path('register/', register, name='register'),
    path('logout/', logout_user, name='logout')

]
