# Generated by Django 3.2.5 on 2021-07-19 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=64)),
                ('last_name', models.CharField(blank=True, max_length=64)),
                ('birthday', models.PositiveIntegerField(blank=True)),
                ('email', models.CharField(blank=True, max_length=64)),
            ],
        ),
    ]
