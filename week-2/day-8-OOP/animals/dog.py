from pet import Pet

class Dog(Pet):
    def __init__(self, name, breed, color, age):
        super().__init__(name, age, breed, color)
    

    def speak(self):
        print("Woof woof")
    
    def sleep(self):
        print(f"{self.name} is now sleeping")
    
    def play(self):
        print(f"{self.name} is playing with their bone!")
    
