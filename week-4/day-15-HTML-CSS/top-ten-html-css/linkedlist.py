####API####
# insert - add node to beginning (or end)
# search - find and return a given node
# remove - remove a given node
# size - return number of nodes
# is_empty - True if no nodes, False otherwise

class Node:
    
    def __init__(self, value):
        self.value = value
        self.next = None

class Linkedlist:

    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            cur = self.head
            while cur.next is not None:
                cur = cur.next
            cur.next = new_node


    def search(self, target):
        current = self.head
        while current.next is not None:
            if current.value == target:
                print("Found")
                return
            current = current.next
        print("Node not found in link")
        return

    def remove(self, target):
        if not self.head:
            return  # If the list is empty, there's nothing to remove.

        if self.head.value == target:
            self.head = self.head.next
            return

        current = self.head
        while current.next:
            if current.next.value == target:
                current.next = current.next.next
                return
            current = current.next
    def size(self):
        current = self.head
        total = 0
        while current:
            total += 1
            if current.next is None:
                print(total) 
                return
            current = current.next

    def display(self):
        current = self.head
        while current:
            print(current.value, end=' -> ')
            current = current.next
        print('None')
    def reversed(self):
        current = self.head
        prev = None
        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next
        
        self.head = prev


        
node1 = Linkedlist()

node1.append(1)
node1.append(2)
node1.append(2)
node1.append(3)
node1.append(4)
node1.append(5)


node1.display()
# node1.search(4)
# node1.remove(3)
print()
node1.reversed()
node1.display()