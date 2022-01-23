from django import forms

from Apps.Questions.models import Question, Answer


class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['question_name', 'responsible']


class AnswerForm(forms.ModelForm):
    image = forms.ImageField(required=False)
    image.widget.attrs.update({'id': 'file-input'})

    class Meta:
        model = Answer
        fields = ['answer_name', 'image', 'question']
