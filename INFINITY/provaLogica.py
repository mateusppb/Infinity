login = 'loginabc'
senha = 'senha123'

for i in range(1,4):
    tentativa_log = input("Login: ")
    tentativa_sen = input("Senha: ")
    if tentativa_log == login and tentativa_sen == senha:
        print("Login efetuado. Bem vindo!")
        break
    else:
        print(f"erro. {3-i} tentativas restantes")
else:
    for _ in range(3):
        print("Acesso bloqueado")