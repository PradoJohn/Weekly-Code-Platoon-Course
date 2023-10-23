from classes.person import Person
import csv

class Student(Person):
    def __init__(self, name, age, role, school_id, password):
        super().__init__(name, age, role, password)
        self.school_id = school_id
    
    def __str__(self) -> str:
        return f"""
        {self.name}
        -----------
        age: {self.age}
        id: {self.school_id}
        """

    @classmethod
    def all_members(cls):
        student = []
        with open('./data/students.csv') as student_file:
            csv_reader = csv.DictReader(student_file, skipinitialspace=True)
            for row in csv_reader:
                new_student = cls(**row)
                student.append(new_student)
        
        # print(student)
        return student

    
# Student.all_students()
