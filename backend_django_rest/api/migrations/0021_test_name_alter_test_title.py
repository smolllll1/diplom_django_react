# Generated by Django 4.1.7 on 2023-05-18 17:30

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0020_remove_test_created_remove_test_popularity_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="test",
            name="name",
            field=models.TextField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name="test",
            name="title",
            field=models.TextField(blank=True, max_length=100),
        ),
    ]
