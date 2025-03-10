numero = 5
tentativas = 0
print("Tente acertar um número de 1 a 10.")
print("Vocẽ possui 3 chances")
while (tentativas < 3):
    palpite = int(input(f"tentativa {tentativas + 1}: "))
    if palpite == numero:
        print("Vocẽ acertou! Parabéns!!!")
        break
    elif tentativas == 2:
        print('Suas tentativas acabaram. Que pena...')
    tentativas += 1        