from django.http import JsonResponse
from django.shortcuts import render, redirect

from Apps.Questions.forms import AnswerForm
from Apps.Questions.models import Question


def user_questions(request):
    questions = Question.objects.filter(responsible_id=request.user.id, closed=False).order_by('publication_date')
    return render(request, 'Questions/questions-list.html', locals())


def add_answer(request, pk):
    if request.method == 'POST':
        print(pk)
        print(type(pk))
        answer_form = AnswerForm(request.POST, request.FILES)

        if answer_form.is_valid():
            answer_form.save(commit=False)
            answer_form.question = pk
            answer_form.save()

            update_question = Question.objects.get(id=pk)
            update_question.closed = True
            update_question.save()
    return JsonResponse({"status": 'Success'})


def question_detail(request, pk):
    question = Question.objects.get(id=pk)
    answer_form = AnswerForm()

    return render(request, 'Questions/question-detail.html', locals())
