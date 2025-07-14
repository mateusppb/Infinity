let idade = prompt("Digite sua idade: ");
let status = prompt("0 - Registrado\n1 - Não registrado\nOpção: ");

let maioridade = (idade >= 18) ? true : false;

switch(status) {
    case "0":
        if (maioridade) {
            console.log("Bem-vindo ao sistema! Acesso completo.");
        } else {
            console.log("Acesso limitado. Complete seu registro.");
        }
        break;
    
    case "1":
        if (maioridade) {
            console.log("Complete seu registro para acessar.");
        } else {
            console.log("Acesso limitado. Complete seu registro.");
        }
        break;

    default: 
        console.log("Status desconhecido.");
        break;
}
