from typing import Any


class CarManager:

    # Class Attribute
    all_cars = {}
    total_cars = 0

    def __init__(self, make, model, year, milage, services):
        CarManager.total_cars += 1
        self._id = CarManager.total_cars
        self._make = make
        self._model = model
        self._year = year
        self._milage = milage
        self._services = services
        CarManager.all_cars[self] = self

    def __str__(self) -> str:
        return f"ID: {self._id} | Make: {self._make} | Model: {self._model} | Year: {self._year} | Milage: {self._milage} | Services: {self._services}"
    
    @property
    def get_make(self, new_make):
        if new_make.isalpha():
            self._make = new_make
    
    @get_make.setter
    def get_make(self, new_make):
        if isinstance(new_make, str):
            self._make = new_make
    
    @property
    def get_model(self):
        return self._model
    
    @get_model.setter
    def set_model(self, new_model):
        self._model = new_model

    @property
    def get_year(self):
        return self._year
    
    @get_year.setter
    def set_year(self, new_year):
        self._year = new_year

    @property
    def get_milage(self):
        return self._milage
    
    @get_milage.setter
    def set_milage(self, new_milage):
        self._year = new_milage

    @property
    def get_services(self):
        return self._services
    
    @get_services.setter
    def set_services(self, new_services):
        self._services.append(new_services)

    @classmethod
    def add_cars(cls):
        # make = str(input("Make: "))
        # model = str(input("Model: "))
        # year = str(input("Year: "))
        # milage = str(input("Milage: "))
        # services = str(input("Services: "))
        cls("Chevy", "Camaro", 1966, 112345, ["oil", "change"])
        print(" ** Sucessfully Added a Car**")
        # cls(make,model,year,milage,services)

    @staticmethod
    def view_all_cars():
        print("\t\t##### Top #####")
        print()
        for car in CarManager.all_cars.values():
            print(car)
        print()
        print("\t\t##### End #####")

    @staticmethod
    def view_total_cars():
        print(f"** There are {CarManager.total_cars} total cars. **")
    
    @classmethod
    def view_car_detail(cls):
        

        print(cls.all_cars)
