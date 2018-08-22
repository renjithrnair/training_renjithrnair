print "enter the people who liked : "
people=raw_input()
people1=people.split(",")
lst=list(people1)
count=len(lst)-2
if (lst[0]==""):
	print "Nobody likes this"
elif (len(lst)==1):
	print lst[0]+" likes this"
elif (len(lst)==2):
	print lst[0]+" and "+lst[1]+" likes this"
elif (len(lst)==3):
	print lst[0]+","+lst[1]+" and "+lst[2]+" likes this"
else :
	print lst[0]+","+lst[1]+" and "+str(count)+" others likes this"