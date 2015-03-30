#!/usr/bin/python

import cgi

#Danger: expose some code when an error occurs
import cgitb
cgitb.enable()

form = cgi.FieldStorage()

number = form.getvalue('number', 0)

print "Content-type: text/html\r\n",
print "\r\n",
print "The number is " + str(number)
