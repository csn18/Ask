from django import forms

from backend.Apps.Users.models import CustomUser


class CustomUserForm(forms.ModelForm):
    age = forms.fields.DateField(widget=forms.widgets.DateInput(attrs={'type': 'date'}))

    class Meta:
        model = CustomUser
        fields = ['username', 'first_name', 'last_name', 'age', 'gender']
