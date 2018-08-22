class Conversion():
    def __init__(self):
        self.str1 = ""

    def getString(self):
    	print "enter a string : "
        self.str1 =raw_input()

    def printString(self):
    	print "Converted string : "
        print(self.str1.upper())

str1 = Conversion()
str1.getString()
str1.printString()
