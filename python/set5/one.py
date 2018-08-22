from sdk_one import JsonSDK

obj = JsonSDK()

print "----1:Get posts 2: Get posts based on the user----"
print "----3:Get post detail 4:Get comments 5:Get comments based on posts----"
print""
print "Enter your choice(1/2/3/4/5)"
choice = raw_input()
choice = int(choice)
if(choice == 1):
    obj.posts()
elif(choice == 2):
    obj.usr_post(2)
elif(choice == 3):
    obj.post_detail(5)
elif(choice == 4):
    obj.comments()
elif(choice == 5):
    obj.comment_for_post(5)
else:
    print "Wrong choice"
