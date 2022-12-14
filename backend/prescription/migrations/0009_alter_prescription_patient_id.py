# Generated by Django 4.0.4 on 2022-12-07 21:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('patient_profile', '0001_initial'),
        ('prescription', '0008_alter_prescription_patient_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prescription',
            name='patient_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='patient_profile.patient'),
            preserve_default=False,
        ),
    ]
