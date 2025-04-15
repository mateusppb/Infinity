tarefas = []

def adicionar_tarefa(nome, descricao, prioridade):
    tarefa = {
        'nome' : nome,
        'descricao' : descricao,
        'prioridade': prioridade,
        'concluida': False
        }
    tarefas.append(tarefa)
    print(f'Tarefa {nome} adicionada!\n')

def listar_tarefas():
    if len(tarefas) == 0:
        print("Não há tarefas.\n")
        return
    else:
        i = 1
        for tarefa in tarefas:
            if tarefa['concluida']:
                conc = 'Concluída'
            else:
                conc = 'Pendente'
            print(f"{i}- Tarefa: {tarefa['nome']}\nDescrição: {tarefa['descricao']}\nPrioridade: {tarefa['prioridade']}\nTarefa {conc}\n")
            i += 1

def concluir_tarefa(opcao):
    tarefa = tarefas[opcao]
    tarefa['concluida'] = True
    print(f"{tarefa['nome']} concluída com sucesso.\n")

def listar_prioridade(prioridade):
    i = 1
    for tarefa in tarefas:
        if tarefa['prioridade'] == prioridade:
            print(f"{i}- {tarefa['nome']}")
            i += 1
    if i == 1:
        print(f"Nenhuma tarefa com prioridade '{prioridade}'.\n")

def menu():
    while True:  
        print("\nGerenciador de Tarefas")
        print("1. Adicionar tarefa")
        print("2. Listar todas as tarefas")
        print("3. Marcar tarefa como concluída")
        print("4. Listar tarefas por prioridade")
        print("5. Sair")
        escolha = input("Escolha uma opção: ")
        if escolha == '1':
            nome = input("Nome da tarefa: ")
            descricao = input("Descrição da tarefa: ")
            prioridade = input("Prioridade (baixa, media, alta): ")
            adicionar_tarefa(nome, descricao, prioridade)

        elif escolha == '2':
            listar_tarefas()
        
        elif escolha == '3':
            i = 0
            for tarefa in tarefas:
                print(f"{i} - {tarefa['nome']}")
                i += 1
            indice = int(input("Informe o número da tarefa a ser concluída: "))
            concluir_tarefa(indice)
        
        elif escolha == '4':
            prioridade = input("Informe a prioridade (baixa, media, alta): ")
            listar_prioridade(prioridade)
        
        elif escolha == '5':
            print("Finalizando programa...")
            break
        else:
            print("Opção inválida! Tente novamente.")
    
if __name__ == "__main__":
    menu()
