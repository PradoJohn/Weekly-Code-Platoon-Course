from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///students'

db = SQLAlchemy(app)

class Student(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(50))
  last_name = db.Column(db.String(50))
  age = db.Column(db.Integer)
  grade = db.Column(db.String(1))
# students = [
#         {'id': '1', 'first_name': 'John', 'last_name': 'Doe', 'age': 18, 'grade': 'A'},
#         {'id': '2', 'first_name': 'Jane', 'last_name': 'Smith', 'age': 19, 'grade': 'B'},
#         {'id': '3', 'first_name': 'Bob', 'last_name': 'Johnson', 'age': 20, 'grade': 'C'},
#         {'id': '4', 'first_name': 'Emily', 'last_name': 'Williams', 'age': 18, 'grade': 'A'},
#         {'id': '5', 'first_name': 'Michael', 'last_name': 'Brown', 'age': 19, 'grade': 'B'},
#         {'id': '6', 'first_name': 'Samantha', 'last_name': 'Davis', 'age': 22, 'grade': 'A'},
#         {'id': '7', 'first_name': 'Oliver', 'last_name': 'Jones', 'age': 20, 'grade': 'B'},
#         {'id': '8', 'first_name': 'Sophia', 'last_name': 'Miller', 'age': 21, 'grade': 'A'},
#         {'id': '9', 'first_name': 'Ethan', 'last_name': 'Wilson', 'age': 19, 'grade': 'C'},
#         {'id': '10', 'first_name': 'Isabella', 'last_name': 'Moore', 'age': 22, 'grade': 'B'}
#     ]

# "http://127.0.0.1:5000/"
# "http://127.0.0.1:5000/students"

@app.route('/students', methods=['GET'])
def get_students():
  # id = request.args.get('id',default=0,type = str)
  # for student in students:
  #   if student['id'] == id:
  #     stud = student
  students = Student.query.all()
  student_list = [
      {'id': student.id, 'first_name': student.first_name, 'last_name': student.last_name, 'age': student.age, 'grade': student.grade}
      for student in students
  ]
  return jsonify(student_list)

@app.route('/', methods=['GET'])
def home():
  return jsonify('home')

@app.route('/old_students', methods=['GET'])
def old_students():
  students = Student.query.filter(Student.age >20)
  student_list = [
      {'id': student.id, 'first_name': student.first_name, 'last_name': student.last_name, 'age': student.age, 'grade': student.grade}
      for student in students
  ]
  return jsonify(student_list)

@app.route('/young_students', methods=['GET'])
def young_students():
  students = Student.query.filter(Student.age <21)
  student_list = [
      {'id': student.id, 'first_name': student.first_name, 'last_name': student.last_name, 'age': student.age, 'grade': student.grade}
      for student in students
  ]
  return jsonify(student_list)

@app.route('/advance_students', methods=['GET'])
def advance_students():
  students = Student.query.filter(Student.age <21 and Student.grade == 'A')
  student_list = [
      {'id': student.id, 'first_name': student.first_name, 'last_name': student.last_name, 'age': student.age, 'grade': student.grade}
      for student in students
  ]
  return jsonify(student_list)

@app.route('/student_names', methods =['GET'])
def student_names():
  students = Student.query.all()
  student_list = [
      {'first_name': student.first_name, 'last_name': student.last_name}
      for student in students
  ]
  return jsonify(student_list)

@app.route('/student_ages', methods=['GET'])
def student_ages():
  students = Student.query.all()
  student_list = [
      {'name': student.first_name + ' ' +student.last_name, 'age': student.age}
      for student in students
  ]
  return jsonify(student_list)


app.run(debug=True)