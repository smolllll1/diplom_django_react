# Generated by Django 4.1.7 on 2023-05-01 18:55

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0013_alter_people_id_my"),
    ]

    operations = [
        migrations.AlterField(
            model_name="people",
            name="id_my",
            field=models.UUIDField(primary_key=True, serialize=False),
        ),
    ]