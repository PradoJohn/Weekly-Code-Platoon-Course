from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///school2'
db = SQLAlchemy(app)

# DATABASE MODEL####
class Students(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(255))
  last_name = db.Column(db.String(255))
  age = db.Column(db.Integer)
  subject = db.Column(db.Integer)

class Subjects(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  subject = db.Column(db.String(255))

class Teachers(db.Model):
  id = db.Column(db.Integer, primary_key = True)
  first_name = db.Column(db.String(255))
  last_name = db.Column(db.String(255))
  age = db.Column(db.Integer)
  subject = db.Column(db.Integer)
############### END  DBModel ###################

#### Index
@app.route('/', methods=['GET'])
def index():
  return jsonify('You are in School Index')

#### get all students
@app.route('/students', methods=['GET'])
def get_students():
  students = Students.query.all()
  student_list = [
      {
        'id': student.id, 
        'first_name': student.first_name, 
        'last_name': student.last_name, 
        'age': student.age, 
        'class': student.subject
      }
      for student in students
  ]
  return jsonify(student_list)

#### get all subjects
@app.route('/subjects', methods=['GET'])
def get_subjects():
  subjects = Subjects.query.all()
  subject_list = [
      {
        'id': subject.id, 
        'subjects': subject.subject}
      for subject in subjects
  ]
  return jsonify(subject_list)

#### get all teachers
@app.route('/teachers', methods=['GET'])
def get_teachers():
  teachers = Teachers.query.all()
  teacher_list = [
      {
        'id': teacher.id, 
        'first_name': teacher.first_name, 
        'last_name': teacher.last_name, 
        'age': teacher.age, 
        'subject': teacher.subject
        }
      for teacher in teachers
  ]
  return jsonify(teacher_list)





if __name__ =='__main__':
  app.run(debug=True)