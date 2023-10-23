from abc import ABC, abstractmethod


class Pet(ABC):

    def __init__(self, name, breed, color, age):
        self.name = name
        self.breed = breed
        self.color = color
        self._age = age

    @property
    def get_age(self):
        return self._age
    
    @get_age.setter
    def set_age(self, new_age):
        if new_age > self._age and type(new_age) == int:
            self._age = new_age

    @abstractmethod
    def speak():
        pass