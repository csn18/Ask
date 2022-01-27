from django import forms

from Apps.Questions.models import Question, Answer


class QuestionForm(forms.ModelForm):
    question_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'qs-name'}))

    class Meta:
        model = Question
        fields = ['question_name', 'responsible']


class AnswerForm(forms.ModelForm):
    answer_name = forms.CharField(widget=forms.TextInput(attrs={'class': 'as-name'}))
    image = forms.ImageField(required=False)
    image.widget.attrs.update({'id': 'file-input', 'class': 'image-answer'})

    class Meta:
        model = Answer
        fields = ['answer_name', 'image', 'question']
