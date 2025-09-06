let turma = [] //array de objetos do tipo aluno

class Aluno {
    //atributos no construtor
    constructor(nome, idade, notas) {
        this.nome = nome
        this.idade = idade
        this.notas = notas
    }

    //calcula a media das notas
    calcularMedia() {
        let soma = 0
        
        for(let nota of this.notas){
            soma += nota
        }
        
        return soma / this.notas.length
    }
}

// colocando 3 objetos dentro do array de alunos
let a = new Aluno("Mateus", 24, [10, 6, 7])
turma.push(a)
let b = new Aluno("Maria", 23, [9, 8, 10])
turma.push(b)
let c = new Aluno("Pedro", 23, [4, 8, 7])
turma.push(c)

//Spread Operator para adicionar mais uma nota para cada aluno
turma[0].notas = [...turma[0].notas, 5]
turma[1].notas = [...turma[1].notas, 7]
turma[2].notas = [...turma[2].notas, 7]

//função que verifica se o aluno foi aprovado com média igual ou maior que 7
let verificarSituacao = function(media) {
    if(media >= 7) return "O aluno está aprovado!"
    else return "O aluno está reprovado."
}

//percorre o array de alunos
for (let aluno of turma){
    let { nome, idade } = aluno; //desestruturação de nome e idade
    console.log("Ficha do aluno: " + nome)
    console.log("Idade: " + idade + " anos")
    console.log("Notas: ")
    //percorre o array de notas de cada aluno da outra iteração
    for(let n of aluno.notas){
        console.log(n)
    }
    console.log("Média: " + aluno.calcularMedia()) //exibir média
    console.log(verificarSituacao(aluno.calcularMedia())) //exibir status de aprovação
}
