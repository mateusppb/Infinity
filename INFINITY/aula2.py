from datetime import date, datetime
from dataclasses import dataclass
import sys
# ASSOCIAÇÃO DE CLASSES

@dataclass
class Endereco:
    cep : str
    rua : str
    numero : str
    bairro : str
    cidade : str
    estado : str

    def formatar(self):
        return f'{self.rua} , {self.numero} - {self.bairro} | {self.cidade} - {self.estado} , {self.cep}'

@dataclass
class Pessoa:
    nome : str
    data_nasc : date
    endereco : Endereco
    
@dataclass
class BancoDePessoas:
    pessoas : list[Pessoa]

    def adicionar_pessoa(pessoa):
        BancoDePessoas.pessoas.append(pessoa)


    def buscar_pessoa_pelo_nome(nome):
        for pessoa in list[Pessoa]:
            if pessoa.nome == nome:
                return pessoa
        return None


    def remover_pessoa_pelo_nome(nome):
        for pessoa in list[Pessoa]:
            if pessoa.nome == nome:
                BancoDePessoas.pessoas.remove(pessoa)


def criar_pessoa():
    nome = input('Digite o nome: ')
    data_nasc = input('Digite a data de nascimento (dd/MM/yyyy): ')
    data_nasc = datetime.strptime(data_nasc, '%d/%m/%Y').date()
    cep = input('Digite o CEP: ')
    rua = input('Digite a rua: ')
    numero = input('Digite o numero: ')
    bairro = input('Digite o bairro: ')
    cidade = input('Digite a cidade: ')
    estado = input('Digite o estado: ')

    endereco = Endereco(cep, rua, numero, bairro, cidade, estado)
    pessoa = Pessoa(nome,data_nasc,endereco)
    BancoDePessoas.adicionar_pessoa(pessoa)



def menu():
    print('--------------')
    print('Opções')
    print('1 - Criar pessoa ')
    print('2 - Buscar pessoa ')
    print('3 - Remover pessoa ')
    print('4 - Sair')
    print('--------------')
    opcao = int(input('Escolha uma opção: '))

    if opcao == 1:
        criar_pessoa()
    elif opcao == 2:
        nome = input('Digite o nome da pessoa: ')
        BancoDePessoas.buscar_pessoa_pelo_nome(nome)
    elif opcao == 3:
        nome = input('Digite o nome da pessoa: ')
        BancoDePessoas.remover_pessoa_pelo_nome(nome)
    elif opcao == 4:
        print('Finalizando o programa...')
        sys.exit()
        
    else:
        print('Opção inválida. ')

while True:
    menu()