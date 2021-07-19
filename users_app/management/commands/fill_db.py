import json
import os

from django.conf import settings
from django.contrib.auth.models import User
from django.core.management import BaseCommand


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.create_user('reqwerfsdfsf1', 'myemaifsfsfl@crazymail.local', '1234qwer1234qwer')
        User.objects.create_user('reqwerfsdfsf2', 'myemaifsfsfl@crazymail.local', '1234qwer1234qwer')
        User.objects.create_user('reqwerfsdfsf3', 'myemaifsfsfl@crazymail.local', '1234qwer1234qwer')
