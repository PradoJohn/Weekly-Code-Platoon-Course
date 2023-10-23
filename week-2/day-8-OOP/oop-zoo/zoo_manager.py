# from abc import ABC, abstractmethod

class Animal():
    def __init__(self, name, species):
        self.name = name
        self.species = species


    def speak(self):
        return f"Animal sound"


class Mammal(Animal):

    def give_birth(self):
        return f"{self.name} the {self.species} has given birth"

class Bird(Animal):

    def __init__(self, name, species, wingspan):
        super().__init__(name, species)
        self.wingspan = wingspan


class Reptile(Animal):

    def bask_in_sun(self):
        return f"{self.name} the {self.species} is basking in the sun"
    


class Primate(Mammal):
    
    def climb_trees(self):
        return f"{self.name} the {self.species} is climbing trees"
    
class Marsupial(Mammal):

    def carry_baby(self):
        return f"{self.name} the {self.species} is carrying its baby"

class Aviary(Bird):
    def __init__(self):
        self.birds = []


class ReptileEnclosure(Reptile):
    def __init__(self):
        self.reptiles = []


animal = Animal("Lion", "Felis leo")

mammal = Mammal("Giraffe", "Giraffa camelopardalis")

bird = Bird("Eagle", "Aquila chrysaetos", wingspan=2.5)

reptiles = Reptile("Turtle", "Testudines")