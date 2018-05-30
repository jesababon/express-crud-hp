CREATE DATABASE hogwarts_crud;

\c hogwarts_crud

CREATE TABLE houses
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    house_img_url VARCHAR(255)
);

CREATE TABLE students
(
    student_id SERIAL PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255),
    student_img_url VARCHAR(255),
    house_id INTEGER REFERENCES houses(id)
);