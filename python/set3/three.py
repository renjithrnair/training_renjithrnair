import re
print "Enter a string"
inpt=raw_input()
for i in re.findall(r"\+?\d[\d -]{8,12}\d", inpt):
	print i 
    