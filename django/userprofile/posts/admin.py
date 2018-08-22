from django.contrib import admin

from .models import Like, Post


class LikeAdmin(admin.ModelAdmin):
    list_filter = ['post']
    search_fields = ['post']    
    list_display = ('post', 'liked_date', 'user')

admin.site.register(Post)
admin.site.register(Like,LikeAdmin)
