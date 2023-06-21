
const firstChild = document.getElementById('first-child');
const parent = firstChild.parentNode;

console.log(parent);

/*
Nessa primeira linha do script, usa-se o getElementById() para recuperar a primeira li por meio do id e atribuí-la à constante firstChild.

Na segunda linha do script, foi pedido ao child que retornasse quem é seu elemento-pai a partir da propriedade parentNode e salvasse-o dentro da variável parent.

De olho na dica: A propriedade parentNode está presente em todos os elementos HMTL. Note que ela é uma propriedade , não uma função. Por isso, não é executada com parênteses.

Mas não só selecionar elementos-pais a gente vive. Existem outras propriedades que permitem, a partir de um elemento, percorrer ou navegar outros com base em diferentes relações entre eles. Vamos conhecê-las?
*/