let nomes = []

//adicionar nome à lista
let adicionarNome = function(nome) {
    nomes.push(nome)
    exibirLista(nomes)
}

//exibe o indíce e os nomes da lista
function exibirLista(lista) {
    console.log("===== LISTA DE NOMES =====")
    lista.forEach((nome, index) => {
        console.log(`${index}- ${nome}`)
    });
}

//filtrar nomes pela primeira letra
function filtrarNomes(letra) {
    let listaFiltrada = nomes.filter(nome =>{
        return nome.charAt(0).toLowerCase() === letra.toLowerCase()
    })
    exibirLista(listaFiltrada)
}

//busca a primeira ocorrência de um nome na lista (se houver)
function buscarNome(nome) {
    let encontrado = nomes.find(n => {
        return n.toLowerCase() === nome.toLowerCase()
    })

    if(encontrado) console.log("O nome está presente na lista.")
    else console.log("Nome não encontrado.")
}

//imprime a lista toda em capslock
function nomeMaiusculo() {
    let novaLista = nomes.map(nome => nome.toUpperCase())
    exibirLista(novaLista)
}

//verificar se todos os nomes da lista possuem mais de 3 caracteres
function verificarCaracteres() {
    let resultado = nomes.every(n => n.length > 3)

    if(resultado) console.log("Todos os nomes possuem mais de 3 caracteres.")
    else console.log("Nem todo nome possui mais de 3 caracteres.")
}

//MENU
while(1) {
    console.log("===== MENU =====")
    console.log("1- Adicionar nome\n2- Filtrar nomes\n3- Buscar Nome\n4- Transformar nomes\n5- Verificar condições\n6- Sair")
    let opcao = prompt("Opção: ")

    if(opcao == 1){
        let nome = prompt("Qual nome deseja adicionar: ")
        adicionarNome(nome)
    } else if (opcao == 2) {
        let letra = prompt("Deseja filtrar os nomes que começam com que letra: ")
        filtrarNomes(letra)
    } else if (opcao == 3) {
        let nome = prompt("Qual nome deseja buscar na lista: ")
        buscarNome(nome)
    } else if (opcao == 4) {
        nomeMaiusculo()
    } else if (opcao == 5) {
        verificarCaracteres()
    } else if (opcao == 6) {
        console.log("Saindo...")
        break
    } else {
        console.log("Opção inválida.")
    }
}
