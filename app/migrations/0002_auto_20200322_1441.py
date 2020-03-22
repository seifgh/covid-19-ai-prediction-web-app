# Generated by Django 3.0.4 on 2020-03-22 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='country',
            options={'verbose_name_plural': 'Countries'},
        ),
        migrations.AddField(
            model_name='country',
            name='deaths_number',
            field=models.BigIntegerField(default=0),
            preserve_default=False,
        ),
    ]
