let carrinho = [];

while(true){
    console.log("1-Adicionar item\n2-Remover item\n3-Exibir lista\n4-Atualizar item");
    var opcao = prompt("Opção: ")
    
    switch(opcao){
        case '1':
            let item = prompt("Qual item deseja adicionar: ");
            carrinho.push(item);
            break;
        case '2':
            let posicao = prompt("Deseja remover o item de qual índice: ");
            carrinho.splice(posicao,1);
            break;
        case '3':
            for(let i = 0; i < carrinho.length; i++){
                console.log(`${i}- ${carrinho[i]}`);
            }
            break;
        case '4':
            let pos = prompt("Deseja atualizar o item de qual índice: ");
            let novoItem = prompt("Qual o novo item para este índice: ");
            carrinho[pos] = novoItem;
            break;
        default:
            console.log("Opção inválida!");
    }
}