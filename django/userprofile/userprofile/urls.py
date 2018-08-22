from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

from posts import views

urlpatterns = [
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),
    path('post/', include('posts.urls')),
    path('accounts/', include('allauth.urls')),
    path('rest/post/', views.PostList.as_view()),
    path('rest/list_like/', views.LikeList.as_view()),
    path('rest/create/', views.CreatePost.as_view()),
    path('rest/post/like/<int:post_id>/', views.CreateLike.as_view()),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
