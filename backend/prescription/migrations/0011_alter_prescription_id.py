# Generated by Django 4.0.4 on 2022-12-09 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prescription', '0010_rename_patient_id_prescription_patient'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prescription',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
