# Generated by Django 3.2 on 2021-08-20 01:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64, unique=True)),
                ('link_repository', models.CharField(max_length=128, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('head_note', models.CharField(max_length=64)),
                ('text_note', models.TextField()),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='дата создание')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='дата обновления')),
                ('is_active', models.BooleanField(default=True)),
                ('project', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='todo.project')),
            ],
        ),
    ]
