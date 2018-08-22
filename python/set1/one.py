dict={}
print "Enter the limit"
n=raw_input()
n=int(n)
for x in range(1,n):
	dict.setdefault(x,x*x)
print dict	
	