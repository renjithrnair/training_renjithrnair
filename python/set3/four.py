import urllib2
import re
response = urllib2.urlopen('https://www.w3schools.com/xml/simple.xml')
html = response.read()
name=re.findall(r'<name>(.*?)</name>',html)
price=re.findall(r'<price>(.*?)</price>',html)
for x in xrange(0,len(name)):
	print name[x]
	print price[x]
