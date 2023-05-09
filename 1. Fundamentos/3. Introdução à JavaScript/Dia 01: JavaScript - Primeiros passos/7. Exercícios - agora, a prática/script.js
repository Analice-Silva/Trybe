//Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos os exercícios trabalham a lógica condicional (if/else e switch/case), os operadores aritméticos (+, -, *, /, %) e os operadores lógicos (>, <, &&, ||). Para que você consiga executar seus códigos, recomendamos que utilize a extensão Code Runner. Você pode ver mais sobre ela no conteúdo sobre o uso do VS Code.
//
//1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
//
//Adição (a + b)
//Subtração (a - b)
//Multiplicação (a * b)
//Divisão (a / b)
//Módulo (a % b)
/*
let a = 3;
let b = 7;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(modulo)


2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let number1 = 5;
let number2 = 18

if (number1 > number2) {
    console.log(number1 + " é maior que " + number2);
}else {
    console.log(number2 + " é maior que " + number1);
}

//3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let number1 = 5;
let number2 = 17;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
    console.log(`${number1} é maior que ${number2} e ${number3}`);
}else if (number2 > number1 && number2 > number3) {
    console.log(`${number2} é maior que ${number1} e ${number3}`);
}else {
    console.log(`${number3} é o maior número`)
}


//4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo

let trueFalse = "positive";

if(trueFalse === "positive") {
    console.log("positive");
}else if (trueFalse === "negative") {
    console.log("negative");
}else {
    console.log("zero")
}


//5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

let anguloA = 15;
let anguloB = 140;
let anguloC = 25;

let somaAngulos = anguloA + anguloB + anguloC;

let todosAngulos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(todosAngulos){
  if (somaAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}


//6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
//Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)

let xadrez = "dama";

switch (xadrez.toLowerCase()) {
    case 'rei':
      console.log('Rei-> Uma casa apenas para qualquer direção.');
      break;
    case 'bispo':
      console.log('Bispo-> Diagonal.');
      break;
    case 'rainha':
      console.log('Rainha-> Diagonal, horizontal e vertical.');
      break;
    case 'cavalo':
      console.log('Cavalo -> "L" pode pular sobre as peças.');
      break;
    case 'torre':
      console.log('Torre -> Horizontal e vertical.');
      break;
    case 'peão':
      console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
      break;
    default:
      console.log('Erro, peça inválida!');
  };

  
  //7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

  //Porcentagem >= 90 -> A
  //Porcentagem >= 80 -> B
  //Porcentagem >= 70 -> C
  //Porcentagem >= 60 -> D
  //Porcentagem >= 50 -> E
  //Porcentagem < 50 -> F

  //O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

  let nota = 76;

if (nota < 0 || nota > 100) {
  console.log("Erro, nota incorreta!");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

//Bônus: use somente um if.

let num1 = 2;
let num2 = 3;
let num3 = 7;

verficacao = "";

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0 ) {
    verficacao = true;
}
else {
    verficacao = false;
}

console.log(verficacao);


//9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

//Bônus: use somente um if.

let num4 = 2;
let num5 = 3;
let num6 = 7;

verficacao2 = "";

if(num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0 ) {
    verficacao2 = true;
}
else {
    verficacao2 = false;
}

console.log(verficacao2);


//10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
//Atente para o fato de que um imposto de 20% incide sobre o custo do produto.
//Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.
//valorCustoTotal = valorCusto + impostoSobreOCusto;
//lucro = valorVenda - valorCustoTotal (lucro de um produto);

let custo = 300;
let venda = 475;

if (custo >= 0 && venda >= 0) {
    let total = custo * 0.2;
    let totalLucro = (venda - total) - custo;
    console.log(totalLucro);
  } else {
    console.log("Error, os valores não podem ser negativos!");
  };
*/

//11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
//A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
//Exemplo: Uma pessoa que possui o salário bruto de R$ 3.000,00 terá o primeiro desconto referente à contribuição do INSS. O cálculo deve ser o demonstrado a seguir.
//O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
//Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
//Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
//R$ 2.670,00 - salário com INSS já deduzido.
//7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25.
//R$ 142,80 - parcela a ser deduzida do imposto de renda.
//Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
//Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
//Resultado: R$ 2.612,55.