/*
[PYIA-A16] Crie uma tabela chamada Produtos que
contenha quatro colunas: ProdutoID, NomeProduto,
Quantidade e Preco. A coluna ProdutoID deve ser um
identificador único para cada produto, a coluna
NomeProduto deve armazenar o nome do produto, a
coluna Quantidade deve indicar a quantidade disponível
do produto, e a coluna Preco deve representar o preço do produto.
Após criar a tabela, insira três registros diferentes, cada um
representando um produto distinto, incluindo valores específicos
para ProdutoID, NomeProduto, Quantidade e Preco.

Feito no mySQL através do PopSQL
*/

CREATE TABLE Produtos (
    ProdutoID INT PRIMARY KEY AUTO_INCREMENT,
    NomeProduto VARCHAR(255) NOT NULL,
    Quantidade INT NOT NULL,
    Preco FLOAT NOT NULL
);

INSERT INTO Produtos (NomeProduto, Quantidade, Preco)
VALUES ('Caderno', 80, 29.90),
('Estojo', 120, 40.00),
('Caneta', 240, 2.99);

SELECT * FROM Produtos;
