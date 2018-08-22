from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Like, Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'


class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'body')


class CreateLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        exclude = ('post', 'user')
