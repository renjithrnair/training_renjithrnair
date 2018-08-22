import smtplib
def sendmail(reciever):
	server=smtplib.SMTP('smtp.gmail.com',587)
	mymail="renjithrnair.sayone@gmail.com"
	server.starttls()
	server.login(mymail,'renjithsayone')
	print "Message : "
	message=raw_input()
	server.sendmail(mymail,reciever,message)
	server.quit()

print"Enter the mail id of the reciever : "
rcvr=raw_input()
sendmail(rcvr)
