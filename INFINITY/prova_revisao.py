produtos = {}

for i in range(5):
    produto = input(f"Insira o produto {i+1}: ")
    preco = input(f"insira o preço de {produto}: ")

    produtos[produto] = float(preco)

total = 0.0

for produto in produtos:
    total += produtos[produto]

print(f'Valor total da compra: R${total:.2f}')

