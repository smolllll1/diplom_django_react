# Generated by Django 4.1.7 on 2023-05-01 15:11

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0007_rename_username_registration_name"),
    ]

    operations = [
        migrations.CreateModel(
            name="Piple",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("adult", models.CharField(max_length=500)),
                ("gender", models.CharField(max_length=500)),
                ("known_for", models.CharField(max_length=1000)),
                ("known_for_department", models.CharField(max_length=500)),
                ("name", models.CharField(max_length=500)),
                ("popularity", models.CharField(max_length=500)),
                ("profile_path", models.CharField(max_length=500)),
            ],
        ),
    ]
