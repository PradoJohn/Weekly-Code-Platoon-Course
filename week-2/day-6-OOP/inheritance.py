class Dog:
    
    def __init__(self, name,breed,color):
        self.name = name
        self._legs = 4
        self.breed = breed
        self.color = color

    @property
    def legs(self):
        return self._legs
    
    @legs.setter

    def set_legs(self, new_legs):
        if new_legs % 2 == 0 and new_legs < 5:
            self._legs = new_legs
    



    def __str__(self):
        return f"{self.name} has {self.legs}, color {self.color}{self.breed}"

    def speak(self):
        if self.name == 'Apollo':
            print(f'{self.name} is Barking')


apollo = Dog(name = "Apollo",breed = "GSD",  color ="Brown")

print(apollo.legs)
print(apollo.breed)
print(apollo.color)
apollo.set_legs = 2
print(apollo.legs)