# Generated by Django 4.1.7 on 2023-04-26 18:13

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0006_rename_name_registration_username"),
    ]

    operations = [
        migrations.RenameField(
            model_name="registration",
            old_name="username",
            new_name="name",
        ),
    ]