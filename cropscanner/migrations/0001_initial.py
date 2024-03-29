# Generated by Django 2.2.3 on 2019-07-19 11:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CropScanner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('crop_results', models.CharField(blank=True, max_length=255, null=True)),
                ('crop_photo', models.ImageField(blank=True, upload_to='crop_photos', verbose_name='crop-logo')),
                ('created_at', models.DateTimeField(auto_now=True, null=True)),
                ('updated_on', models.DateTimeField(auto_now_add=True, null=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
