# Generated by Django 2.2.3 on 2019-07-18 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SystemCrop',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('system_crop_name', models.CharField(max_length=100)),
                ('system_seedlings_amount', models.CharField(blank=True, max_length=100)),
                ('system_crop_photo', models.ImageField(blank=True, upload_to='system_crop_photos', verbose_name='system-crop-logo')),
                ('system_crop_description', models.CharField(blank=True, max_length=255)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('updated_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
