def decorator(func):

    def wrapper():
        print("Running")
        func()
        print("End")

    return wrapper
    
@decorator
def sayHello():
    print("I am here")
   


sayHello()