# Exercise: Exploring Inheritance in Python OOP - Building a Zoo

Welcome to the "Build a Zoo" exercise! In this exercise, you'll dive into the world of inheritance in Python's object-oriented programming by creating a variety of animal classes for your zoo. By building a hierarchy of classes and exploring multiple inheritance, you'll learn how to organize and extend code efficiently.

## Scenario: Zoo Animals

Imagine you are tasked with creating a zoo management system. Your goal is to build a collection of animal classes that represent different types of animals found in the zoo.

## Part 1: Creating the Animal Hierarchy

### 1.1 Animal Class

Start by creating a base class called `Animal`. This class should have the following attributes and methods:

- Attributes:
  - `name` (instance attribute): A string representing the name of the animal.
  - `species` (instance attribute): A string representing the species of the animal.

- Methods:
  - `speak(self)` (instance method): A method that returns a string representing the sound the animal makes.

### 1.2 Mammal Class

Create a class called `Mammal` that inherits from the `Animal` class. Add a method `give_birth(self)` that prints a message indicating that the mammal has given birth.

## Part 2: Zoo Animals

### 2.1 Bird Class

Create a class called `Bird` that inherits from the `Animal` class. Add an attribute `wingspan` (instance attribute) representing the wingspan of the bird in meters.

### 2.2 Reptile Class

Create a class called `Reptile` that inherits from the `Animal` class. Add a method `bask_in_sun(self)` that prints a message indicating that the reptile is basking in the sun.

### 2.3 Mammal Subclasses

Create two subclasses of the `Mammal` class:

#### 2.3.1 Primate Class

Create a class called `Primate` that inherits from the `Mammal` class. Add a method `climb_trees(self)` that prints a message indicating that the primate is climbing trees.

#### 2.3.2 Marsupial Class

Create a class called `Marsupial` that inherits from the `Mammal` class. Add a method `carry_baby(self)` that prints a message indicating that the marsupial is carrying its baby.

## Part 3: Zoo Attractions

### 3.1 Aviary Class

Create a class called `Aviary` that represents an area in the zoo where birds are kept. This class should have an attribute `birds` (instance attribute) that stores a list of bird instances.

### 3.2 ReptileEnclosure Class

Create a class called `ReptileEnclosure` that represents an area in the zoo where reptiles are kept. This class should have an attribute `reptiles` (instance attribute) that stores a list of reptile instances.

## Conclusion

By building a zoo management system with a hierarchy of animal classes, you've practiced the fundamental concepts of inheritance in Python's object-oriented programming. You've learned how to create classes that share attributes and methods, extend functionalities through inheritance, and organize code for modularity and reusability. This exercise provides you with a hands-on experience that prepares you to apply these concepts to a wide range of programming scenarios. Keep exploring and experimenting to further enhance your understanding of OOP principles. Enjoy building your virtual zoo! 🦁🐻🦒🦉
