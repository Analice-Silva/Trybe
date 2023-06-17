let ingredientsItems = [
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

let ingredientsList = document.querySelector('.ingredients-list');
for (let index = 0; index < ingredientsItems.length; index += 1) {
    let ingredient = ingredientsItems[index];
    //console.log(ingredient);

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;
    
    //console.log(ingredientListItem);
    ingredientsList.appendChild(ingredientListItem);
};