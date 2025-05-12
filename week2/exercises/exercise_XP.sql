CREATE DATABASE public;

CREATE TABLE items(
	id SERIAL PRIMARY KEY ,
	items varchar(50),
	price int
);

CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	first_name varchar(50),
	last_name varchar(50)
);
-- 1
INSERT INTO items (items,price)
VALUES 
('Small Desk' ,100 ),
('Large desk' ,300),
('Fan' ,80);
-- 2
INSERT INTO customers(first_name , last_name)
VALUES 
( 'Greg' , 'Jones'),
( 'Sandra' , 'Jones'),
('Scott' , 'Scott'),
('Trevor' , 'Green'),
('Melanie' , 'Johnson');
-- 3.1
SELECT * FROM items;
-- 3.2
SELECT * FROM items
WHERE price>80;
-- 3.3
SELECT * FROM items
WHERE price<=300;
-- 3.4
SELECT * FROM customers
WHERE last_name = 'Smith'; --we well have nothing 
-- 3.5
SELECT * FROM customers
WHERE last_name = 'Jones';
-- 3.6
SELECT * FROM customers
WHERE last_name != 'Scott';




