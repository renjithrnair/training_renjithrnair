from django.urls import path

from . import views

app_name = 'posts'

urlpatterns = [

    path('', views.create_post_view, name='create_post'),
    path('like/', views.like_post_view, name='like_post'),
    path('send_mail/', views.send_mail_view, name='send_mail')
]
