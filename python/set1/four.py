print "Enter comma seperated words"
word = raw_input()
seperated = word.split(",")
tpl = tuple(seperated)
print tpl
srt = sorted(tpl)
for x in range(0, len(srt)):
    out = ",".join(srt)
print out
