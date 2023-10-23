class Dog:
    
    def __init__(self, name,breed,color):
        self.name = name
        self.legs = 4
        self.breed = breed
        self.color = color

    def __str__(self):
        return f"{self.name} has {self.legs}, color {self.color}{self.breed}"

    def speak(self):
        if self.name == 'Apollo':
            print(f'{self.name} is Barking')


apollo = Dog(name = "Apollo",breed = "GSD",  color ="Brown")

print(apollo.name)
print(apollo.breed)
print(apollo.color)

p = print

p(apollo)