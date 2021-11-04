from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse


# Create your views here.

def contact(request):
	if request.method == 'POST':
		form = ContactForm(request.POST)
		if form.is_valid():
			subject = "Website Inquiry"
			body = {
			'name': form.cleaned_data['name'],
			'email': form.cleaned_data['email_address'],
			'subject': form.cleaned_data['subject'],
			'message':form.cleaned_data['message'],
			}
			message = "\n".join(body.values())

			try:
				send_mail(subject, message, 'test.daw.rs@gmail.com', ['saboacular@gmail.com'])
			except BadHeaderError:
				return HttpResponse('Invalid header found.')
			return HttpResponseRedirect ("confirmation.html")

	else:
		form = ContactForm()
	return render(request, "Contact.html", {'form':form})
