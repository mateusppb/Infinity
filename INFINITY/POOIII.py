contas = []
class ContaBancaria:
    def __init__(self, titular):
        self.__saldo = 0
        self.__titular = titular

    def getTitular(self):
        return self.__titular

    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor
        else:
            print("Quantia inválida.")

    def sacar(self, valor):
        if valor > self.__saldo or valor < 0:
            print("Quantia inválida.")
        else:
            self.__saldo -= valor

    def exibir_saldo(self):
        print(f"R${self.__saldo:.2f} disponíveis.")

def menu():
    print("1- Criar conta")
    print("2- depositar")
    print("3- sacar")
    print("4- exibir saldo")
    print("5- Sair")
    op = int(input("Opção: "))
    return op

op = 0
while(op != 5):
    op = menu()
    if op == 1:
        titular = input("Digite o nome do Titular da nova conta: ")
        conta = ContaBancaria(titular)
        contas.append(conta)
    elif op == 2:
        valor = int(input("Qual valor deseja depositar: "))
        titular = input("Na conta de qual titular deseja depositar: ")
        for conta in contas:
            if titular == conta.getTitular():
                conta.depositar(valor)
                break
            print("Titular não encontrado.")
    elif op == 3:
        valor = int(input("Qual valor deseja sacar: "))
        titular = input("Na conta de qual titular deseja sacar: ")
        for conta in contas:
            if titular == conta.getTitular():
                conta.sacar(valor)
                break
            print("Titular não encontrado.")
    elif op == 4:
        titular = input("Deseja ver o saldo de qual titular: ")
        for conta in contas:
            if titular == conta.getTitular():
                conta.exibir_saldo()
                break
            print("Titular não encontrado.")
    elif op == 5:
        print("Saindo...")
    else:
        print("Opção inválida.")