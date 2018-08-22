import unittest
from five import Calc
obj1=Calc()
class Test_Calc(unittest.TestCase):
	
	def test_add(self):
		self.assertTrue(obj1.add(5,3) == 7)
		self.assertRaises(TypeError,obj1.add,5,3)

	def test_sub(self):
		self.assertTrue(obj1.sub(5,3) == 2)
		self.assertRaises(TypeError,obj1.sub,5,3)

	def test_mul(self):
		self.assertTrue(obj1.mul(5,3) == 15)
        

	def test_div(self):
		self.assertTrue(obj1.div(5,2) == 2)
		self.assertRaises(ValueError,obj1.div,5,0)

