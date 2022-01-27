from django.urls import path

from Apps.Questions.views import question_detail, user_questions, add_answer

urlpatterns = [
    path('<int:pk>/', question_detail, name='question_detail'),
    path('list/', user_questions, name='questions_list'),
    path('add/', add_answer, name='add_answer'),
]
