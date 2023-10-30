DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS teachers;

CREATE TABLE students(
  id serial PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  age INT,
  subject INT
);
-- COPY students from '/home/pradobanz/full-course/week-4/day-17-flask/flask_postgres_school/data/student.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE subjects(
  id serial PRIMARY KEY,
  subject VARCHAR(255)
);
-- COPY subjects from '/home/pradobanz/full-course/week-4/day-17-flask/flask_postgres_school/data/subjects.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE teachers(
  id serial PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  age INT,
  subject INT
);

-- COPY teachers from '/home/pradobanz/full-course/week-4/day-17-flask/flask_postgres_school/data/teachers.csv' DELIMITER ',' CSV HEADER;

SELECT * FROM students, subjects, teachers;