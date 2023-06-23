/*
Acesse o elemento where-are-you.

Acesse parent a partir de where-are-you e adicione uma color a ele.

Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.

Acesse o first-child a partir de parent.

Acesse o first-child a partir de where-are-you.

Acesse o texto Attention! a partir de where-are-you.

Acesse o third-child a partir de where-are-you.

Acesse o third-child a partir de parent.
 */

//Acesse o elemento where-are-you.
//Acesse parent a partir de where-are-you e adicione uma color a ele.
//const whereAreYou = document.getElementById('where-are-you').parentNode.style.color = 'red';
//console.log(whereAreYou);

//Acesse o elemento where-are-you.
//Acesse parent a partir de where-are-you e adicione uma color a ele.
const whereAreYou = document.getElementById('where-are-you');
const parent = whereAreYou.parentElement;
parent.style.color = 'red';
//console.log(parent)

//Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'Estou adicionando um texto';

//Acesse o first-child a partir de parent.
//const firstChild1 = whereAreYou.parentNode;
//console.log(firstChild1);
const firstChild1 = parent.firstElementChild;
//console.log(firstChild1);

//Acesse o first-child a partir de where-are-you.
const firstChild = whereAreYou.previousElementSibling;
//console.log(firstChild)

//Acesse o texto Attention! a partir de where-are-you.
const attention = whereAreYou.nextSibling;
//console.log(attention);

//Acesse o third-child a partir de where-are-you.
const thirdChild = whereAreYou.nextElementSibling;
//console.log(thirdChild);

//Acesse o third-child a partir de parent.
const thirdChild1 = parent.lastElementChild.previousElementSibling;
console.log(thirdChild1);