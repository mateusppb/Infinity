class Veiculo:
    def movimentar(self):
        print("O veículo está em movimento.")

class Carro(Veiculo):
    def movimentar(self):
        print("Carro está dirigindo.")

class Moto(Veiculo):
    def movimentar(self):
        print("Moto está acelerando.")

def menu():
    print("1- Veiculo\n2- Carro\n3- Moto\n4- Sair")
    opcao = int(input("Digite uma opção: "))
    return opcao

opcao = 0
while (opcao != 4):
    opcao = menu()
    if opcao == 1:
        veiculo = Veiculo()
        veiculo.movimentar()
    elif opcao == 2:
        carro = Carro()
        carro.movimentar()
    elif opcao == 3:
        moto = Moto()
        moto.movimentar()
    elif(opcao == 4):
        print("Saindo...")
        break
    else:
        print("Opção inválida: ")
