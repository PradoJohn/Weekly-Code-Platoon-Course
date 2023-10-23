class Student:

    def __init__(self, name, age, talent, student_id, email):
        self.name = name
        self.age = age
        self.talent = talent
        self._student_id = student_id
        self._email = email

    def __str__(self) -> str:
        return f"{self.name}, {self.age} of age with {self.talent} skills | {self._email} | {self._student_id}"
    
    @property
    def get_student_id(self):
        return self._student_id
    
    @get_student_id.setter
    def set_student_id(self, new_student_id):
        if len(new_student_id) <10:
            self._student_id = new_student_id

    @property
    def get_email(self):
        return self._email
    
    @get_email.setter
    def set_email(self, new_email):
        if '@' in new_email:
            self._email = new_email

student = Student("John", 23, "Sing", 1234567, 'example@ex.com')

student.set_student_id = "12345"
student.set_email = "@john"
print(student)

