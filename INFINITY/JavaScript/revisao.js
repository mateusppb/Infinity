var tarefas = [];

function adicionarTarefa() {
    let tarefa = prompt("Qual tarefa deseja adicionar:");

    tarefas.push(tarefa);

}

function listarTarefas() {
    
    console.log('Lista de tarefas\n')
    
    let n = 0;
    
    for(let tarefa of tarefas) {
        console.log(`${n}- ${tarefa}.`);
        n++;
    }

}

function removerTarefa() {

    listarTarefas();

    let index = parseInt(prompt("Digite o índice da tarefa que deseja remover: "));

    tarefas.splice(index,1);

}

function concluirTarefa() {

    listarTarefas();

    let index = prompt("Digite o índice da tarefa que deseja concluir: ");

    if(tarefas[index].charAt(0) === "✅"){
        console.log('Tarefa já concluída.')
    } else{
        tarefas[index] = "✅ " + tarefas[index];
        console.log(`Tarefa concluída: ${tarefas[index]}`)
    }

}

let opcao = -1;

while(opcao != 5) {
    console.log("Escolha uma opção\n1-Adicionar tarefa\n2-Remover tarefa\n3-Listar tarefa\n4-Concluir tarefa\n5-Sair");
    opcao = parseInt(prompt("\nOpção: "));

    if(opcao === 1){
        adicionarTarefa();
    } else if(opcao === 2){
        removerTarefa();
    } else if(opcao === 3){
        listarTarefas();
    } else if(opcao === 4){
        concluirTarefa();
    } else if(opcao === 5){
        console.log('Saindo do programa...');
    } else {
        console.log("Opção inválida.");
    }
}

