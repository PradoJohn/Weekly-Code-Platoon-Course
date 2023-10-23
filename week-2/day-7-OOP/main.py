from practice import Student

# student1 = Student("John", "john@student.org")
# student2 = Student("Judith", "judith@student.org")
# student3 = Student("Bazttie", "bazztie@student.org")


# for student in Student.all_students:
#     print(Student.all_students[student])

def create_student():
    name = input("Student name: ")
    email = name +"@student.org"
    new_student = Student(name, email)

    print(Student.all_students)


create_student()