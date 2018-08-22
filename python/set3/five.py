class Calc():
	
	def add(self,input1,input2):
		if((type(input1) or type(input2)) not in [int,float]):
			raise TypeError("Enter valid numbers")
		return input1+input2

	def sub(self,input1,input2):
		if((type(input1) or type(input2)) not in [int,float]):
			raise TypeError("Enter valid numbers")
		return input1-input2

	def mul(self,input1,input2):
		if((type(input1) or type(input2)) not in [int,float]):
			raise TypeError("Enter valid numbers")
		return input1*input2

	def div(self,input1,input2):
		if((type(input1) or type(input2)) not in [int,float]):
			raise TypeError("Enter valid numbers")
		if(input2==0):
			raise ValueError("input2 cannot be zero")	
		return input1/input2

obj=Calc()
print "Enter 1st number : "
input1=raw_input()
print "Enter 2nd number : "
input2=raw_input()
input1=int(input1)
input2=int(input2)
sum=obj.add(input1,input2)
difference=obj.sub(input1,input2)
product=obj.mul(input1,input2)
division=obj.div(input1,input2)

print "Sum : "
print sum
print "Difference : "
print difference
print "Product : "
print product
print "Division : "
print division			


