# Generated by Django 5.1.4 on 2025-01-04 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='numView',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=8, null=True),
        ),
    ]