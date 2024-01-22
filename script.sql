CREATE DATABASE mundoverde;

USE mundoverde;

-- Categoria
-- 0 = Cereais
-- 1 = Suplementos
-- 2 = Temperos
CREATE TABLE Produtos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(60) NOT NULL,
    categoria INT NOT NULL,
    preco FLOAT NOT NULL,
    quantidade INT NOT NULL,
    url VARCHAR(255)
);

INSERT INTO Produtos VALUES (1, 'Granola com castanhas 1kg', 0, 40.18, 10, 'cereais.png');
INSERT INTO Produtos VALUES (2, 'Whey protein 907g', 1, 379.39, 12, 'suplementos.png');
INSERT INTO Produtos VALUES (3, 'Alho em pó 59g', 2, 19.99, 14, 'temperos.png');


