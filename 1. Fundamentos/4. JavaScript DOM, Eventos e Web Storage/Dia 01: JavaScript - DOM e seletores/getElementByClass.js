//document.getElementsByClassName('lenda');

//alterando o conteúdo de texto de um elemento da lista
document.getElementsByClassName('piloto-f1-atual')[0].innerText = 'Stroll';
//OBS: Toda vez que você utilizar o seletor getElementsByClassName, vai retornar pra você uma lista, sempre, em todos os casos.

let pilotosF1Atual = document.getElementsByClassName('piloto-f1-atual')

for (let index = 0; index < pilotosF1Atual.length; index += 1) {
    //console.log(pilotosF1Atual[index]);
    pilotosF1Atual[index].innerText = 'Lewis Hamilton'
}
