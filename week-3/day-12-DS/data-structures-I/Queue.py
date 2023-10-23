####API####
# enqueue - add item to beginning
# dequeue - remove and return item from end
# peek - return last item
# size - return number of items
# is_empty - True if no items, False otherwise
class Node:
    
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:

    def __init__(self):
        self.head = None
    
    def enqueue(self, data):
        new_node = Node(data)
        
        if self.head is None:
            self.head = new_node
            return
        else:
            new_node.next = self.head
            self.head = new_node
            
    def dequeue(self):
        
        if self.head is None:
            return
        
        removed_data = self.head.value
        self.head = self.head.next
        print(f"removed data: {removed_data}")
        return 

        


    def displayNode(self):
        currentNode = self.head
        while currentNode:
            print(currentNode.value, end= ' -> ')
            currentNode = currentNode.next

q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

q.displayNode()

q.dequeue()
q.displayNode()