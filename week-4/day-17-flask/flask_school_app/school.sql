DROP TABLE IF EXISTS student;
CREATE TABLE student(
    id serial PRIMARY KEY,
    first_name varchar(50),
    last_name varchar(50),
    age INT,
    subject INT
);

DROP TABLE IF EXISTS teachers;
CREATE TABLE teachers(
    id serial PRIMARY KEY,
    first_name varchar(50),
    last_name varchar(50),
    age INT,
    subject INT
);

DROP TABLE IF EXISTS subjects;
CREATE TABLE subjects(
    id serial PRIMARY KEY,
    subject varchar(50)
);

