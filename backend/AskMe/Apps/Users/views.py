from django.contrib.auth import login, logout
from django.http import JsonResponse
from django.shortcuts import render, redirect

from Apps.Questions.models import Question, Answer
from Apps.Users.models import CustomUser
from Apps.Questions.forms import QuestionForm


def add_question(request, pk):
    if request.method == 'POST':
        data = {
            'question_name': request.POST.get('answer_name'),
            'responsible': pk
        }

        question_form = QuestionForm(data)
        if question_form.is_valid():
            question_form.save()

    return JsonResponse({"status": 'Success'})


def profile(request, pk):
    answers = Answer.objects.filter(question__responsible=pk).order_by('-publication_date')
    question_form = QuestionForm()

    try:
        user = CustomUser.objects.get(id=pk)
    except CustomUser.DoesNotExist:
        user = None

    return render(request, 'Questions/profile.html', locals())


def login_user(request):
    if request.method == 'POST':
        data = {
            'username': request.POST.get('login'),
            'password': request.POST.get('password'),
        }

        try:
            user = CustomUser.objects.get(username=data.get('username'))
        except CustomUser.DoesNotExist:
            return redirect('register')

        login(request, user)
        return redirect('main')

    return render(request, 'Registration/login.html', locals())


def register(request):
    if request.method == 'POST':
        data = {
            'username': request.POST.get('login'),
            'password': request.POST.get('password'),
        }

        user = CustomUser.objects.create_user(
            username=data['username'],
            password=data['password']
        )
        user.save()
        return redirect('login')
    return render(request, 'Registration/register.html', locals())


def logout_user(request):
    logout(request)
    return redirect('main')
