from django.core.management import BaseCommand

from users_app.models import User


class Command(BaseCommand):

    def handle(self, *args, **options):
        User.objects.create_user(username="pavel12", last_name="pavel2", first_name="pavel3",
                                 email='pavel12@crazymail.local', password='1234qwer1234')
        User.objects.create_user(username="pavel42", last_name="pavel5", first_name="pavel6",
                                 email='pavel22@crazymail.local', password='1234qwer1234')
        User.objects.create_user(username="pavel72", last_name="pavel8", first_name="pavel9",
                                 email='pavel32@crazymail.local', password='1234qwer1234')
