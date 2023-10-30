from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///school_db"

db = SQLAlchemy(app)


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    subject_id = db.Column(db.Integer, db.ForeignKey("subjects.id"))


class Teachers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    age = db.Column(db.Integer)
    subject_id = db.Column(db.Integer, db.ForeignKey("subjects.id"))


class Subjects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String(50))
    teacher = db.relationship("Teachers", backref="subject", lazy=True, uselist=False)
    student_list = db.relationship("Student", backref="subject", lazy=True)


@app.route("/students", methods=["GET"])
def get_students():
    students = Student.query.all()
    student_list = [
        {
            "id": student.id,
            "first_name": student.first_name,
            "last_name": student.last_name,
            "age": student.age,
            "class": {
                "subject": student.subject.subject,
                "teacher": f"{student.subject.teacher.first_name} {student.subject.teacher.last_name}",
            },
        }
        for student in students
    ]
    return jsonify(student_list)


@app.route("/teachers", methods=["GET"])
def get_teachers():
    teachers = Teachers.query.all()
    teacher_list = [
        {
            "first_name": teacher.first_name,
            "last_name": teacher.last_name,
            "age": teacher.age,
            "subject": {
                "subject": teacher.subject.subject,
                "students": [
                    f"{person.first_name} {person.last_name}"
                    for person in teacher.subject.student_list
                ],
            },
        }
        for teacher in teachers
    ]
    return jsonify(teacher_list)


@app.route("/subjects", methods=["GET"])
def get_subjects():
    subjects = Subjects.query.all()
    subject_list = [
        {
            "subject": subject.subject,
            "teacher": f"{subject.teacher.first_name} {subject.teacher.last_name}",
            "students": [
                f"{person.first_name} {person.last_name}"
                for person in subject.student_list
            ],
        }
        for subject in subjects
    ]
    return jsonify(subject_list)


@app.route("/", methods=["GET"])
def home():
    return jsonify("Home Page")


app.run(debug=True)
