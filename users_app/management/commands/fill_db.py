from django.core.management import BaseCommand

from users_app.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.create_user(username="pavel1", last_name="pavel2", first_name="pavel3",
                                 email='pavel1@crazymail.local')
        User.objects.create_user(username="pavel4", last_name="pavel5", first_name="pavel6",
                                 email='pavel2@crazymail.local')
        User.objects.create_user(username="pavel7", last_name="pavel8", first_name="pavel9",
                                 email='pavel3@crazymail.local')
