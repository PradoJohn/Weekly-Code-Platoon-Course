import csv

class Student:
    students = {}

    def __init__(self, id, account_type, first_name, last_name, current_video_rentals):
        self._id = id
        self.student_type = account_type
        self.first_name = first_name
        self.last_name = last_name
        self.current_video_rentals = current_video_rentals
        Student.students[self._id] = self

    # @classmethod
    # def load_from_csv(cls):
    #     with open('./data/students.csv', 'r') as file:
    #         csv_reader = csv.DictReader(file)
    #         for row in csv_reader:
    #             id = int(row['id'])
    #             account_type = row['account_type']
    #             first_name = row['First Name']
    #             last_name = row['Last Name']
    #             current_video_rentals = int(row['Current Video Rentals'])
    #             cls(id, account_type, first_name, last_name, current_video_rentals)
    @classmethod
    def tests(cls):
        print('Hey')
if __name__ == '__main__':
    # Student.load_from_csv()
    Student.tests()