words = 0
characters = 0
lines = 0
file = open("test.txt", "r")
for line in file:
    words += len(line.split())
    lines += 1
    characters += len(line)
print "Number of words="
print words
print "Number of lines="
print lines
print "Number of characters="
print characters
