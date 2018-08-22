import unittest
from sdk_one import JsonSDK
obj1= JsonSDK()
class Test_JsonSDK(unittest.TestCase):
	def  test_usr_post(self):
		self.assertRaises(TypeError,obj1.usr_post,5)

	def test_post_detail(self):
		self.assertRaises(TypeError,obj1.post_detail,5)	
		
# from nose.tools import assert_true
# import requests


# def test_request_response():
#     # Send a request to the API server and store the response.
#     response = requests.get('http://jsonplaceholder.typicode.com')
#     nose.tools.assert_true(response.ok)
