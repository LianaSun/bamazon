DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products(
 item_id INT NOT NULL AUTO_INCREMENT,
 product_name VARCHAR(50) NULL,
 department_name VARCHAR(50) NULL,
 price DECIMAL(10,2) NULL,
 stock_quantity INT NULL,
 PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flower Crown", "Accessories", 15.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shampoo", "Body Care", 8.59, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("How to Train Your Dragon DVD", "Movies", 19.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pens", "Office Supplies", 3.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Household Supplies", 14.79, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wool Socks", "Accessories", 12.39, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lotion", "Body Care", 6.89, 47);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("My Cousin Vinny", "Movies", 9.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HDMI Cord", "Office Supplies", 16.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Windex", "Household Supplies", 4.99, 200);



