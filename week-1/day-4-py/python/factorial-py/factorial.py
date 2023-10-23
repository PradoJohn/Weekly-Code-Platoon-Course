def factorial(num):
	# your code here
	if num == 1:
		return 1
	else:
		return num * factorial(num-1)
	

print(factorial(6))