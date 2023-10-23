class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # Insertion at the end of the linked list
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    # Insertion at the beginning of the linked list
    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # Deletion by value
    def delete(self, data):
        if not self.head:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    def search(self, data):
        current = self.head
        while current:
            if current.data == data:
                return current.data
            current = current.next
        return False

    def reverseLink(self):
        prev = None
        current = self.head
        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next 
        current = prev
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")    
# Example usage:
my_list = LinkedList()
my_list.append(1)
my_list.append(2)
my_list.append(3)
my_list.display()  # Output: 1 -> 2 -> 3 -> None

my_list.prepend(0)
# my_list.display()  # Output: 0 -> 1 -> 2 -> 3 -> None
# my_list.display()  # Output: 0 -> 1 -> 3 -> None
# print(my_list.search(3))

my_list.reverseLink()
# my_list.display()