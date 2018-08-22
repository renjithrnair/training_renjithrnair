import urllib2
import json


class JsonSDK():

    def posts(self):
        url = 'https://jsonplaceholder.typicode.com/posts'
        json_obj = urllib2.urlopen(url)
        data = json.load(json_obj)
        print json.dumps(data, indent=1)

    def usr_post(self, user):
        if((type(user) not in [int])):
            raise TypeError("User id doesn't exist")
        url = 'https://jsonplaceholder.typicode.com/posts?userId='+str(user)
        json_obj = urllib2.urlopen(url)
        data = json.load(json_obj)
        print json.dumps(data, indent=1)

    def post_detail(self, post):
        if((type(post) not in [int])):
            raise TypeError("Post id not valid")
        url = 'https://jsonplaceholder.typicode.com/posts/'+str(post)
        json_obj = urllib2.urlopen(url)
        data = json.load(json_obj)
        print json.dumps(data, indent=1)

    def comments(self):
        url = 'https://jsonplaceholder.typicode.com/comments'
        json_obj = urllib2.urlopen(url)
        data = json.load(json_obj)
        print json.dumps(data, indent=1)

    def comment_for_post(self, post):
        url = 'https://jsonplaceholder.typicode.com/posts/' + \
            str(post)+'/comments'
        json_obj = urllib2.urlopen(url)
        data = json.load(json_obj)
        print json.dumps(data, indent=1)
