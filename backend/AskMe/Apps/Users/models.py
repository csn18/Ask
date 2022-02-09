from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    GENDERS = (
        ('m', 'Мужчина'),
        ('f', 'Женщина'),
    )

    gender = models.CharField('Пол', max_length=1, choices=GENDERS, default='')
    age = models.DateField('Возраст', default='2000-01-01')
    photo = models.ImageField(upload_to='image/avatars/', default='image/avatars/user.png')



