//Vamos dominar o javascript
const mainBox = document.getElementById('first');

function createElement (classes) {
    const novaDiv = document.createElement('div');
    novaDiv.className = classes; 
    return novaDiv;
}

const addElement = (parent, child) => {
    parent.appendChild(child);
}

//mainBox.appendChild(createElement('small green circle'));

addElement(mainBox, createElement('small green circle'))
addElement(mainBox, createElement('small red circle'))
addElement(mainBox, createElement('small yellow circle'))

//mudando a cor de um dos elementos
const todosOsElementos = document.querySelectorAll('.small');

for (let outroFor of todosOsElementos) {
    outroFor.style.background = 'orange'
}
/*
for (let index = 0; index < todosOsElementos.length; index += 1) {
    todosOsElementos[index].style.background = 'orangered'
}
*/




/*
const mainBox = document.getElementById('first');
console.log(mainBox);
//cria o elemento
const novaDiv = document.createElement('div');
novaDiv.classList.add('small');
novaDiv.classList.add('red');
novaDiv.classList.add('square');
console.log(novaDiv);
//insere o elemento na página
mainBox.appendChild(novaDiv);
//console.log(mainBox);
const novaDiv1 = document.createElement('div');
novaDiv1.className = 'small green circle';
mainBox.appendChild(novaDiv1);
const novaDiv2 = document.createElement('div');
novaDiv2.className = 'small yellow square';
mainBox.appendChild(novaDiv2);
*/