from zoo_manager import Animal, Mammal, Bird, Reptile, Primate, Marsupial, Aviary, ReptileEnclosure


def test_animal():
    animal = Animal("Lion", "Felis leo")
    assert animal.name == "Lion"
    assert animal.species == "Felis leo"
    assert animal.speak() == "Animal sound"


def test_mammal():
    mammal = Mammal("Giraffe", "Giraffa camelopardalis")
    assert mammal.give_birth() == "Giraffe the Giraffa camelopardalis has given birth"


def test_bird():
    bird = Bird("Eagle", "Aquila chrysaetos", wingspan=2.5)
    assert bird.wingspan == 2.5


def test_reptile():
    reptile = Reptile("Turtle", "Testudines")
    assert reptile.bask_in_sun() == "Turtle the Testudines is basking in the sun"


def test_primate():
    primate = Primate("Chimpanzee", "Pan troglodytes")
    assert primate.climb_trees() == "Chimpanzee the Pan troglodytes is climbing trees"


def test_marsupial():
    marsupial = Marsupial("Kangaroo", "Macropus")
    assert marsupial.carry_baby() == "Kangaroo the Macropus is carrying its baby"


def test_aviary():
    aviary = Aviary()
    assert isinstance(aviary.birds, list)


def test_reptile_enclosure():
    reptile_enclosure = ReptileEnclosure()
    assert isinstance(reptile_enclosure.reptiles, list)
