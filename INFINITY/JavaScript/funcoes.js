let tarefas = [];

let adicionarTarefa = function (tarefa) {
    //adicionar um objeto à lista de tarefas
    tarefas.push({descricao: tarefa, concluida: false})
    console.log(`"${tarefa}" adicionado à lista de tarefas!`)
}

let listarTarefas = () => {
    console.log("===== LISTA DE TAREFAS =====")
    for(let i = 0; i < tarefas.length; i++) {
        console.log(`${i}- ${tarefas[i].descricao}`)
    }
}

function gerenciarTarefa (index, callback) {
    callback(index)
}

function removerTarefa (index) {
    console.log(`Tarefa removida: "${tarefas[index].descricao}"`)
    tarefas.splice(index, 1)

}

function atualizarTarefa (index) {
    let atualizacao = prompt(`Qual a descrição atualizada da tarefa "${tarefas[index].descricao}": `)
    tarefas[index].descricao = atualizacao
    console.log("Tarefa atualizada com sucesso.")
}

function concluirTarefa (index) {
    if (tarefas[index].concluida){
        console.log("Erro! Tarefa já concluída.")
    } else {
        tarefas[index].concluida = true
        console.log(`Tarefa concluída: "${tarefas[index].descricao}"`)
    }
}

while(1) {
    console.log("===== MENU =====")
    console.log("1- Adicionar Tarefa\n2- Listar Tarefas\n3- Remover Tarefa\n4- Atualizar Tarefa\n5- Concluir tarefa\n6- Sair")
    let opcao = prompt("Opção: ")

    if(opcao == 1){
        let tarefa = prompt("Qual tarefa deseja adicionar: ")
        adicionarTarefa(tarefa)
    } else if (opcao == 2) {
        listarTarefas()
    } else if (opcao == 3) {
        let index = parseInt(prompt("Qual o índice da tarefa que deseja remover: "))
        gerenciarTarefa(index, removerTarefa)
    } else if (opcao == 4) {
        let index = parseInt(prompt("Qual o índice da tarefa que deseja atualizar: "))
        gerenciarTarefa(index, atualizarTarefa)
    } else if (opcao == 5) {
        let index = parseInt(prompt("Qual o índice da tarefa que deseja concluir: "))
        gerenciarTarefa(index, concluirTarefa)
    } else if (opcao == 6) {
        console.log("Saindo...")
        break
    } else {
        console.log("Opção inválida.")
    }
}
