from django.db import models

from Apps.Users.models import CustomUser


class Question(models.Model):
    question_name = models.CharField(max_length=512)
    publication_date = models.DateTimeField(auto_now_add=True)
    responsible = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    closed = models.BooleanField(default=False)


class Answer(models.Model):
    answer_name = models.TextField(max_length=4096)
    publication_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='images/answers/', blank=True, null=True)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, blank=True, null=True)
