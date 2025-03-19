def media(a : int,b : int, c : int):
    return float((a+b+c)/3)

n1 = int(input("Digite o primeiro número: "))
n2 = int(input("Digite o segundo número: "))
n3 = int(input("Digite o terceiro número: "))

result = media(n1, n2, n3)

print(f"Média aritmética: {result:.2f}")