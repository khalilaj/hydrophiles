# Generated by Django 2.2.3 on 2019-07-11 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='System',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('system_name', models.CharField(blank=True, max_length=255, null=True)),
                ('system_photo', models.FileField(blank=True, upload_to='', verbose_name='system-logo')),
                ('system_description', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
