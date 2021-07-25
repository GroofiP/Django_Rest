from django.db import models

from users_app.models import User


class Project(models.Model):
    name = models.CharField(max_length=64, unique=True)
    link_repository = models.CharField(max_length=128, unique=True)
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    head_note = models.CharField(max_length=64)
    text_note = models.TextField()
    created = models.DateTimeField(auto_now_add=True, verbose_name="дата создание")
    updated = models.DateTimeField(auto_now=True, verbose_name="дата обновления")
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.head_note
