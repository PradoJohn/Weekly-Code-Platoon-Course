
pip install flask
pip install flask SQLAlchemy
pip install psycopg2

 sudo apt-get install --reinstall libpq-dev

Postgres commands

\l list
\d data tables
\c to connect
\du roles
\conninfo  

CREATE DATABASE <name>
\c <name>

CREATE TABLE <name> ( once ---------) <= this will close the command
id serial PRIMARY KEY,
VARCHAR(20),
INT,
CHAR(1));

COPY student from 'full-path' DELIMETER ',' CSV HEADER; (single qoutation)

<!-- get all student -->
SELECT * FROM student;
<!-- Get all student first name and last name -->
SELECT first AS first_name, last AS last_name from student;
<!-- Grab all student that has grade 'B' -->
SELECT * FROM student WHERE grade = 'B';
<!-- Count all students -->
SELECT COUNT(*) FROM student WHERE grade = 'B';
<!-- Groupings -->
SELECT grade AS letter, COUNT(*) FROM student WHERE grade = 'B' GROUP BY grade;  <!-- Query Output: letter: B | count: 3 -->
<!-- Alphabetical Order -->
SELECT first, last FROM student ORDER BY last;
<!-- Alphabetical Descending Order -->
SELECT first, last FROM student ORDER BY last DESC;
<!-- Limit -->
SELECT first, last FROM student ORDER BY last DESC LIMIT 3;
<!-- First letter of last name -->
SELECT first, last FROM student WHERE last LIKE 'S%';
<!-- Comparison Operator -->
SELECT * FROM student WHERE age IN(18,19); <!-- WHERE grade = 'A' and age >18 OR grade = 'B' -->



INSERT INTO <name> (first,last,age,grade) VALUES ('John', 'Doe', 18, 'A'),('Bob', 'Smith', 19', 'B');

\i students.sql