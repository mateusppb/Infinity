inicio = int(input("Digite o valor do início do intervalo: "))
fim = int(input("Digite o valor do fim do intervalo: "))

soma = 0

for i in range(inicio,fim + 1):
    if i % 2 == 0:
        soma += i

if soma > 0:
    print(f'A soma dos termos pares de {inicio} até {fim} é {soma}')
else:
    print('Não há números pares nesse intervalo.')