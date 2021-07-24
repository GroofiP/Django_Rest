from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    email = models.CharField(max_length=64, unique=True)

    def __str__(self):
        return self.username
