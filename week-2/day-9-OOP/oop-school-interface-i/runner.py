from classes.school import School 

school = School('Ridgemont High') 

print(school.name)
print(school.students)
print(school.staff)


while True:

    print("""
    --------------------------------
    Welcome, Richard. Your access level is Principal
        What would you like to do?
        Options:
        1 List All Students
        2 View Individual Student <student_id>
        3 Add a Student
        4 Remove a Student <student_id>
        5 Quit
    """)
    user_input = input("===> ")
    match user_input:
        case '1':
            school.list_students()
        case '2':
            student_id = input("Enter student id: ")
            student = school.find_student_by_id(student_id)
            print(student)
        case '3':
            student_data = {'role':'student'}
            student_data['name']      = input('Enter student name:\n')
            student_data['age']       = input('Enter student age: \n')
            student_data['school_id'] = input('Enter student school id: \n')
            student_data['password']  = input('Enter student password: \n')
            school.add_student(student_data)
        case '4':
            student_id = input("Enter student id: ")
            student = school.find_student_by_id(student_id)
            if student:
                school.students.remove(student)
                print("Student Has been Remove")
        case '5':
            print('** Logged out **')
            break

print(user_input)