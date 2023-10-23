
class Queue:

    def __init__(self):
        self._q = []

    def enqueue(self,item):
        self._q.insert(0,item)

    def dequeue(self):
        
        return self._q.pop()
    
    def peek(self):
        pass

que = Queue()

que.enqueue("HEllo")
que.enqueue("HEllo")