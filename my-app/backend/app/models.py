from django.db import models

# Create your models here.


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.title
    
class Recipe(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    cookTime = models.TextField()
    ingredients = models.JSONField()
    instructions = models.TextField()

    def __str__(self):
        return self.title
