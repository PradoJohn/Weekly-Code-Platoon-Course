from pet import Pet

class Cat(Pet):

    def __init__(self, name, age, breed, color, claws=True):
        super().__init__(name, breed, color, age)
        self._claws = claws

    @property
    def get_claws(self):
        return self._claws
    
    @get_claws.setter
    def set_claws(self, has_claws):
        if isinstance(has_claws, bool):
            self._claws = has_claws

    def speak(self):
        print("Meow moew")
    
    def sleep(self):
        print(f"{self.name} is now sleeping")
    
    def play(self):
        print(f"{self.name} is playing with their string ball!")
