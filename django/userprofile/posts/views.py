from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.db.models import Q
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect, render
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from posts.forms import PostCreationForm

from .models import Like, Post
from .serializers import (CreateLikeSerializer, CreatePostSerializer,
                          LikeSerializer, PostSerializer)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


@login_required(login_url='accounts:login')
def create_post_view(request):

    if request.method == 'POST':
        title_text = request.POST.get('title')
        post_text = request.POST.get('body')
        image_url = request.FILES.get('image')
        response_data = {}
        post = Post(title=title_text, body=post_text,
                    author=request.user, image=image_url)
        post.save()
        response_data['title'] = post.title
        response_data['body'] = post.body
        if post.image:
            response_data['image'] = post.image.url
        else:
            response_data['image'] = ''
        response_data['author'] = post.author.username
        response_data['id'] = post.id
        response_data['created_date'] = post.created_date.strftime(
            '%B %d, %Y %I:%M %p')
        print(response_data)
        return JsonResponse(response_data)
    else:
        post_list = Post.objects.all().order_by('-created_date')
        form = PostCreationForm()
        template = 'posts/create_post.html'
        page_template = 'posts/post_list.html'
        query = request.GET.get("qry")
        if query:
            post_list = post_list.filter(Q(title__contains=query) |
                                         Q(body__contains=query))
        if request.is_ajax():
            template = page_template
        return render(request, template, {'form': form, 'list': post_list,
                                          'page_template': page_template, })


def like_post_view(request):
    if request.method == 'POST':
        pid = request.POST.get('user_like')
        response_data = {}

        like = Like(user=request.user, post=Post.objects.get(id=pid))
        liked_user = Like.objects.filter(post=pid, user=request.user)

        if liked_user.exists():
            liked_user.delete()
            response_data['value'] = "Like"
        else:
            like.save()
            response_data['value'] = "Unlike"
        response_data['count'] = Like.objects.filter(post=pid).count()
        return JsonResponse(response_data)
    else:
        like_list = Like.objects.all()
    return render(request, 'post/create_post.html',
                  {'form': form, 'list': like_list})


def send_mail_view(request):
    if request.method == 'POST':
        user = request.user
        post_id = request.POST.get('post_id')
        post = Post.objects.get(id=post_id)
        user = User.objects.get(username=post.author)
        subject = 'Post notification'
        from_email = settings.EMAIL_HOST_USER
        to_email = [user.email]
        contact_message = 'You got a new notification.Login to see the updates'
        like = Like(user=request.user, post=Post.objects.get(id=post_id))
        liked_user = Like.objects.filter(post=post_id, user=request.user)
        send_mail(subject, contact_message, from_email,
                  to_email, fail_silently=False,)
        return HttpResponse("send")


class PostList(ListAPIView):
    queryset = Post.objects.all().order_by('-created_date')
    serializer_class = PostSerializer


class LikeList(ListAPIView):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer


class CreatePost(CreateAPIView):
    serializer_class = CreatePostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class CreateLike(APIView):
    def post(self, request, post_id):
        user = self.request.user
        postid = post_id
        print(post_id)
        if(Like.objects.filter(user=user, post=postid).exists()):
            Like.objects.filter(user=user, post=postid).delete()
            return HttpResponse("Disiked")
        else:
            serializer = CreateLikeSerializer(data=request.data)
            if serializer.is_valid(self):
                serializer.save(user=user, post=Post.objects.get(id=postid))
            return HttpResponse("Liked")
