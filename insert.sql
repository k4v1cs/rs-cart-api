-- Inserting into carts table
INSERT INTO carts (user_id, created_at, updated_at, status) VALUES (1, '2024-05-08', '2024-05-08', 'OPEN');
INSERT INTO carts (user_id, created_at, updated_at, status) VALUES (2, '2024-05-08', '2024-05-08', 'OPEN');
INSERT INTO carts (user_id, created_at, updated_at, status) VALUES (3, '2024-05-08', '2024-05-08', 'ORDERED');
INSERT INTO carts (user_id, created_at, updated_at, status) VALUES (4, '2024-05-08', '2024-05-08', 'OPEN');
INSERT INTO carts (user_id, created_at, updated_at, status) VALUES (5, '2024-05-08', '2024-05-08', 'OPEN');

-- Inserting into cart_items table
INSERT INTO cart_items (cart_id, product_id, count) VALUES (1, 101, 2);
INSERT INTO cart_items (cart_id, product_id, count) VALUES (1, 102, 1);
INSERT INTO cart_items (cart_id, product_id, count) VALUES (2, 103, 3);
INSERT INTO cart_items (cart_id, product_id, count) VALUES (3, 104, 1);
INSERT INTO cart_items (cart_id, product_id, count) VALUES (4, 105, 2);
INSERT INTO cart_items (cart_id, product_id, count) VALUES (5, 106, 1);

INSERT INTO users (name, password, email) VALUES('timothy', 'pass', 'timmy@example.com');
INSERT INTO users (name, password, email) VALUES('elisabeth', 'pass', 'elisabeth@example.com');
INSERT INTO users (name, password, email) VALUES('lin', 'pass', 'lin@example.com');
INSERT INTO users (name, password, email) VALUES('marcel', 'pass', 'marcel@example.com');
INSERT INTO users (name, password, email) VALUES('mercedes', 'pass', 'mercedes@example.com');