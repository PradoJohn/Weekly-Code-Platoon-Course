from abc import ABC, abstractclassmethod

class Person(ABC):

    def __init__(self, name, age, role, password):
        self.name = name
        self.age = age
        self.password = password
        self.role = role
    
    @abstractclassmethod
    def all_members(self):
        pass