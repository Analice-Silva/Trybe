let itemsList = [
    '500g de feijão carioquinha cozido',
    '200g de toucinho',
    '1 concha de óleo',
    '1 cebola média picada',
    '4 dentes de alho picado',
    '5 ovos',
    '1 colher de sopa de sal com alho',
    'Cheiro verde a gosto',
    '200g de farinha de mandioca'
];

let lista = document.querySelector('.ingredients-list');

for (let index = 0; index < itemsList.length; index += 1) {
    let ingredient = itemsList[index];
    //console.log(ingredient);

    let listaDeIngredientes = document.createElement('li');
    listaDeIngredientes.innerText = ingredient;
    listaDeIngredientes.className = 'list'
    //console.log(listaDeIngredientes);
    lista.appendChild(listaDeIngredientes);
    //console.log(listaDeIngredientes)
};

//Removendo um item através do DOM
let items = document.querySelectorAll('.list');
//console.log(items);

for (let index = 0; index < items.length; index += 1) {
    let element = items[index];
    //console.log(element);
    if (element.innerText.includes('toucinho')) {
       items.removeChild(element);
    }
}
console.log(items);
