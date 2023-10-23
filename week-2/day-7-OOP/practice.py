
class Student:

    all_students = {}
    id = 0

    def __init__(self, name, email):
        Student.id += 1
        self.name = name
        self._id = Student.id
        self._email = email
        Student.all_students[self] = self
    
    def __str__(self):
        return f"ID: {self._id} Name: {self.name} Email: {self._email}"
    
    @property
    def get_id(self):
        return self._id
    
    @get_id.setter
    def set_id(self, new_id):
        if new_id.isnumeric():
            self._id = new_id
    
    @property
    def get_email(self):
        return self._email
    
    @get_email.setter
    def set_email(self, new_email):
        pattern = "@student.org"
        if new_email in new_email[:-len(pattern)]:
            self._email = new_email
    
    def goingToSchool(self):
        return f"{self.name} is going to school"
    
    def studying(self):
        return f"{self.name} is studying"
    