# Generated by Django 3.0.4 on 2020-03-22 15:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_auto_20200322_1459'),
    ]

    operations = [
        migrations.RenameField(
            model_name='country',
            old_name='affections',
            new_name='infections',
        ),
    ]
