/*[JSIA-A01] Crie uma calculadora simples em JavaScript que utilize os conceitos de entrada de dados, operadores aritméticos e operadores de atribuição.

Solicite ao usuário dois números utilizando o método prompt().
Realize as operações aritméticas básicas (adição, subtração, multiplicação, divisão e resto) e exiba os resultados.
Utilize operadores de atribuição (como +=, -=, *=, etc.) para atualizar/reatribuir o valor de uma variável com os resultados das operações.
Mostre os resultados no console utilizando console.log(). */

let num1 = parseInt(prompt("Insira o primeiro número: "));
let num2 = parseInt(prompt("Insira o segundo número: "));

console.log("- OPERAÇÕES REALIZADAS -");

//soma
let resultado = num1;
resultado += num2;
console.log(`${num1} + ${num2} = ${resultado}`);

//subtração
resultado = num1;
resultado -= num2;
console.log(`${num1} - ${num2} = ${resultado}`);

//multiplicação
resultado = num1;
resultado *= num2;
console.log(`${num1} x ${num2} = ${resultado}`);

//divisão
resultado = num1;
resultado /= num2;
console.log(`${num1} / ${num2} = ${resultado}`);

//resto
resultado = num1;
resultado %= num2;
console.log(`${num1} % ${num2} = ${resultado}`);
