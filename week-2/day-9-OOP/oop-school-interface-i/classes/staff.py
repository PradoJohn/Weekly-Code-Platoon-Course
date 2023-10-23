from classes.person import Person
import csv

class Staff(Person):
    def __init__(self, name, age, role, employee_id, password):
        super().__init__(name, age, role, password)
        self.employee_id = employee_id


    @classmethod
    def all_members(cls):
        staff = []
        with open('./data/staff.csv') as staff_file:
            csv_reader = csv.DictReader(staff_file, skipinitialspace=True)
            for row in csv_reader:
                new_staff = cls(**row)
                staff.append(new_staff)
        # print(staff)
        return staff

# Staff.all_staff()