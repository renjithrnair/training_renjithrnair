from bs4 import BeautifulSoup
import requests
import time
for x in range(0,26):
	source=requests.get("http://example.webscraping.com/places/default/index/"+str(x)).text
	soup=BeautifulSoup(source,'lxml')
	for test in soup.find_all('td'):	
		# test=soup.find('div',id='results')
		print("example.webscraping.com"+test.a.img["src"])
		print(test.a.text)
	time.sleep(1)


