# Generated by Django 4.0.4 on 2022-12-07 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Medication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('generic_name', models.CharField(max_length=255)),
                ('ndc', models.CharField(max_length=255)),
                ('dosage', models.CharField(max_length=255)),
            ],
        ),
    ]
