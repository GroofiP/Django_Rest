from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64, blank=True)
    birthday = models.PositiveIntegerField(blank=True)
    email = models.CharField(max_length=64, blank=True)
