from django.db import models

# Create your models here.

class Member(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField()

    def __str__(self):
        return self.name