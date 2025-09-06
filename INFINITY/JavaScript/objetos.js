let aluno = {
    //atributos de Aluno
    nome: "Mateus",
    notas: [9, 4, 8],

    //metodo calcular media das notas
    calcularMedia: function() {
        let soma = 0

        for(let nota of this.notas) {
            soma += nota
        }
        return soma / this.notas.length
    }
}

//chamando a função calcularMedia
console.log("Media do aluno: " + aluno.calcularMedia())

//desestruturação do atributo nome
let nome = aluno.nome
console.log(`Nome: ${nome}`)

//Spread Operator pra adicionar nota no array de notas
console.log("Notas antes do spread operator: " + aluno.notas)
aluno.notas = [...aluno.notas, 8]
console.log("Notas depois do spread operator: " + aluno.notas)
