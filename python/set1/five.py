tpl = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print "Given tuple : "
print tpl
evens = [x for x in range(tpl[0], len(tpl)) if x % 2 == 0]
print "Even numbers in the given tuple : "
print tuple(evens)
