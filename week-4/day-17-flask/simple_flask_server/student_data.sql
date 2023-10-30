
DROP TABLE IF EXISTS student;
CREATE TABLE student (
    id serial PRIMARY KEY,
    first_name VARCHAR (50),
    last_name VARCHAR (50),
    age INT,
    grade CHAR(1)
);

INSERT INTO student(first_name, last_name, age, grade) 
VALUES ('John', 'Doe', 18, 'A'), ('Jane', 'Smith', 19, 'B'), ('Bob', 'Johnson', 20, 'C'),
('Emily', 'Williams', 18, 'A'),('Michael', 'Brown', 19, 'B'), ('Samantha', 'Davis', 22, 'A'),
('Oliver', 'Jones', 20, 'B'), ('Sophia', 'Miller', 21, 'A'), ('Ethan', 'Wilson', 19, 'C'), 
('Isabella', 'Moore',22, 'B');