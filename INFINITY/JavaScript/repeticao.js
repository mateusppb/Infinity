let nomes = [];

while(true){
    let nome = prompt("Digite um nome ('sair' para encerrar): ");
    if(nome === "sair"){
        break;
    }

    nomes.push(nome);
}

for(let i = 0; i < nomes.length; i++) {
    console.log(`índice: ${i} - nome: ${nomes[i]}`);
}

for(let n of nomes){
    console.log(`Bem vindo, ${n}!`)
}

