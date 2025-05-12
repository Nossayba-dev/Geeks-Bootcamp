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

INSERT INTO items (items,price)
VALUES 
('Small Desk' ,100 ),
('Large desk' ,300),
('Fan' ,80);

INSERT INTO customers(first_name , last_name)
VALUES 
( 'Greg' , 'Jones'),
( 'Sandra' , 'Jones'),
('Scott' , 'Scott'),
('Trevor' , 'Green'),
('Melanie' , 'Johnson');
SELECT * FROM items;
SELECT * FROM items
-- WHERE price>80;
SELECT * FROM items
WHERE price<=300;
SELECT * FROM customers
WHERE last_name = 'Smith'; --we well have nothing 
SELECT * FROM customers
WHERE last_name = 'Jones';
SELECT * FROM customers
WHERE last_name != 'Scott';




