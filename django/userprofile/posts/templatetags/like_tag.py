from django import template

register = template.Library()


@register.simple_tag(takes_context=True)
def like(context, post):
    if(post.like_set.filter(user=context['request'].user).exists()):
        return ("Unlike")
    else:
        return ("Like")
