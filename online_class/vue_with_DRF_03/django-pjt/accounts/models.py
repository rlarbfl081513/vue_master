# accounts/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    # 양의 정수만 입력 가능하게 하는것 PositiveIntegerField
    age = models.PositiveIntegerField(blank=True, null=True)