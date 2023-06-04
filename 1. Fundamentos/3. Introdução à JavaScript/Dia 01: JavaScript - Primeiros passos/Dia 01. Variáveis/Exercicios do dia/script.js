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


//Exercício 4
//Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

//👀 Dica: para os ângulos serem de um triângulo válido, a soma dos três ângulos deve ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

let anguloA = 45;
let anguloB = 45;
let anguloC = 90;

let somaAngulos = anguloA + anguloB + anguloC
let angulosValidos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(angulosValidos){
    if(somaAngulos === 180){
        console.log(true);
    }else{
        console.log(false);
    }
}else{
    console.log('Erro: ângulo inválido');
}

//Exercício 5
//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
//⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

//Exemplo: Bispo -> Diagonais.
let peca = 'bispo';
let message = '';

switch (peca.toLocaleLowerCase()) {
    case 'rei':
        message = 'Rei -> Uma casa para qualquer direção.';
        break;
    case 'bispo':
        message = 'Bispo -> Diagonais.';
        break;
    case 'rainha':
        message = 'Rainha -> Diagonal, horizontal e vertical.';
        break;
    case 'cavalo':
        message = 'Cavalo -> "L" pode pular sobre as peças.';
        break;
    case 'torre':
        message = 'Torre -> Horizontal e vertical.';
        break;
    case 'peão':
        message = 'Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.';
        break;
    default:
        message = 'Erro: peça inválida';
}

console.log(message);

//🚀 Exercício 6: Há um par entre nós
//6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
//Faça esse exercício utilizando somente um if.

let var1 = 12;
let var2 = 1;
let var3 = 9;

if(var1 % 2 === 0 || var2 % 2 === 0 || var3 % 2 === 0) {
    console.log(true);
}else{
    console.log(false);
}

//Exercício 7
//Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

//⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.

//Para as faixas de impostos, use as seguintes referências:

//INSS
//Salário bruto até R$ 1.556,94: alíquota de 8%;
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
//IR
//Até R$ 1.903,98: isento de imposto de renda;
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
//O cálculo deve ser o demonstrado a seguir
//O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

//Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

//Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:

//R$ 2.670,00 - salário com INSS já deduzido;
//7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
//R$ 142,80 - parcela a ser deduzida do imposto de renda.
//Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.

//Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

//Resultado: R$ 2.612,55.

//👀 Dica: Que tal identificar as alíquotas com variáveis de nomes explicativos?

let salarioBruto = 3000;
let aliquotaINSS;
let aliquotaIR;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * (8 / 100);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * (9 / 100);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * (11 / 100);
} else {
    aliquotaINSS = 570.88
}
//console.log(aliquotaINSS)

let salarioBase = salarioBruto - aliquotaINSS;
//console.log(salarioBase.toFixed(2))

if (salarioBase <= 1903.99) {
    aliquotaIR = 0;
} else if (salarioBase > 1903.99 && salarioBase <= 2826.65) {
    aliquotaIR = salarioBase * (7.5 / 100) - 142.80;
} else if (salarioBase > 2826.66 && salarioBase <= 3751.05) {
    aliquotaIR = salarioBase * (15 / 100) - 354.80;
} else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = salarioBase * (22.5 / 100) - 636.13;
} else {
    aliquotaIR = salarioBase * (27.5 / 100) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIR;

console.log(salarioLiquido)