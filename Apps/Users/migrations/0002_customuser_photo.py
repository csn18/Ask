# Generated by Django 4.0.1 on 2022-01-23 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='photo',
            field=models.ImageField(default='user.png', upload_to='image/avatars/'),
        ),
    ]
