//Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos os exercícios trabalham a lógica condicional (if...else e switch/case), os operadores aritméticos (+, -, *, /, %) e os operadores lógicos (>, <, &&, ||). Para executar seus códigos, recomendamos que utilize a extensão Code Runner.

//Exercício 1
//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. É necessário que seu código tenha duas variáveis, num1 e num2, definidas no começo com os valores que serão operados. Escreva códigos para:

//Adição (num1 + num2)
//Subtração (num1 - num2)
//Multiplicação (num1 * num2)
//Divisão (num1 / num2)
//Módulo (num1 % num2)

let num1 = 7;
let num2 = 9;

let adicao = num1 + num2;
console.log(adicao);

let subtracao = num1 - num2;
console.log(subtracao);

let multiplicacao = num1 * num2;
console.log(multiplicacao);

let divisao = num1 / num2;
console.log(divisao.toFixed(2));

let modulo = num1 % num2;
console.log(modulo);


//Exercício 2
//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let valor1 = 19;
let valor2 = 16;

if(valor1 > valor2){
    console.log(valor1 + ' é maior que ' + valor2);
}
else if(valor1 === valor2) {
    console.log(valor1 + ' é igual ' + valor2);
}
else{
    console.log(valor2 + ' é maior que ' + valor1);
}

//Exercício 3
//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let numero1 = 14;
let numero2 = 6;
let numero3 = 8;

if(numero1 > numero2 && numero1 > numero3){
    console.log(numero1 + ' é o maior número');
} else if(numero2 > numero1 && numero2 > numero3) {
    console.log(numero2 + ' é o maior número');
} else if(numero3 > numero1 && numero3 > numero2) {
    console.log(numero3 + ' é o maior número');
} else if(numero1 === numero2 && numero1 === numero3) {
    console.log('os números são iguais');
}
else {
    console.log('Insira um número válido')
}

