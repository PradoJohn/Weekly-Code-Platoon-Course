
class Stack:
    
    def __init__(self):
        self.base = []

    def push(self,item):
        
        self.base.append(item)

    def pop(self):
        return self.base.pop()

    def peek(self):
        if len(self.base)==0:
            return None
        print('Here')
        return self.base[-1]
    

def display(stack):
    print("stack base: ", stack.base)

mystack = Stack()

mystack.push('Hello')
mystack.push('World')

display(mystack)
# mystack.pop()
display(mystack)

print(mystack.peek())
# display(mystack)