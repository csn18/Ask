from django.urls import path

from Apps.Questions.views import question_detail, user_questions

urlpatterns = [
    path('<int:pk>/', question_detail, name='question_detail'),
    path('list/', user_questions, name='questions_list'),
]

