from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(name="Name", max_length=50)
    email_address = forms.EmailField(name="Email", max_length=150)
    subject = forms.EmailField(name="Subject", max_length=150)
    message = forms.CharField(name="Message", max_length=2000)
