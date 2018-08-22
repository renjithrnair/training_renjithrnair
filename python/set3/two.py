import re
print "Enter your email address : "
email=raw_input()
if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
	print "Invalid"
else :
	print "Valid"	