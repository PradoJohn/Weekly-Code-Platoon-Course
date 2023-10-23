class Parent:

    def __init__(self, job, name):
        self.job = job
        self.name = name

class Father(Parent):

    def __init__(self, job, name):
        super().__init__(job, name)

class Mother(Parent):

    def __init__(self, job, name):
        super().__init__(job, name)


class Child:

    def __init__(self, name, father, mother):
        self.name = name
        self.father = father
        self.mother = mother

class DayCare:

    def __init__(self, name):
        self.name = name
        self.children = []

    def __str__(self) -> str:
        return f'{self.children}'
    

john = Father("SE","John")
mary = Mother("SE", "Mary")

billy = Child("billy", john, mary)

print(billy.father.name)

daycare = DayCare("Daddy Day Care")

daycare.children.append(billy)

print(DayCare)

