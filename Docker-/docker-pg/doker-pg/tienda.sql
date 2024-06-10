-- Conectar a la base de datos 'tienda'
\c tienda;

-- Crear la tabla 'productos'
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    producto VARCHAR(100),
    precio NUMERIC(10, 2)
);

-- Insertar 10 productos deportivos
INSERT INTO productos (producto, precio) VALUES
    ('Pelota de fútbol', 25.99),
    ('Raqueta de tenis', 89.99),
    ('Pelota de básquet', 29.99),
    ('Guantes de boxeo', 45.00),
    ('Patines en línea', 79.95),
    ('Bicicleta de montaña', 499.99),
    ('Tabla de surf', 299.99),
    ('Mancuerna de 10 kg', 20.50),
    ('Cinta de correr', 699.00),
    ('Soga para saltar', 10.99),
    ('Casco de bicicleta', 39.99),
    ('Mochila de trekking', 59.99),
    ('Carpa para acampar', 149.99),
    ('Antiparras de natación', 15.99),
    ('Paleta de ping pong', 12.99),
    ('Bate de béisbol', 35.00),
    ('Pelota de vóley', 22.50),
    ('Kettlebell de 15 kg', 45.00),
    ('Bolsa de dormir', 79.99),
    ('Chaleco salvavidas', 49.99);
