try:
    a = 1
    b = 2
    c = 'donuts'

    d = a + b
    print(d)

    e = a + b
    print(e)
except Exception as error:
    print('There was an error')
    print(error)

else:
    print("Handle sucess, there was no error")
finally:
    print('donuts are yummy')