/*const nomes = ['Débora', 'Carlos', 'Lucas'];

for (let index = 0; index < nomes.length; index += 1) {
    console.log(nomes[index]);
}
*/
/* 
//Mega sena
const numerosSorteados = [];
const meuJogo = [5, 13, 24, 35, 48, 57];

const numeros01 = Math.random() * 60;
console.log(numeros01)
*/


//Gerando números aleatórios
const numerosSorteados = [];
const meuJogo = [5, 13, 24, 35, 48, 57];

for (let index = 0; index < 6; index += 1) {
    const numeroAleatorio = Math.floor(Math.random() * 60);

    if (!numerosSorteados.includes(numeroAleatorio)) {
        numerosSorteados.push(numeroAleatorio);
    } else {
        index -= 1; // aqui faço outra repetição para sortear outro número caso ele já exista
    }
}

let numerosAcertos = 0;

for (let indexSorteado = 0; indexSorteado < numerosSorteados.length; indexSorteado += 1) {
    for (let indexMeuJogo = 0; indexMeuJogo < numerosSorteados.length; indexMeuJogo += 1) {
        if(numerosSorteados[indexSorteado] === meuJogo[indexMeuJogo]){
            numerosAcertos += 1;
        }
    }
}

console.log( 'Número de acerto',numerosAcertos)
//console.log(numerosSorteados);


/*
const drawNumbers = [];
const myGame = [5, 13, 24, 35, 48, 57];

for (let index = 0; index < 6; index += 1) {
    const randomNumber = Math.floor(Math.random() * 60);

    if (!drawNumbers.includes(randomNumber)) {
        drawNumbers.push(randomNumber);
    } else {
        index -= 1; // aqui faço outra repetição para sortear outro número caso ele já exista
    }
}

let numbersHits = 0;

for (let indexDrawn = 0; indexDrawn < drawNumbers.length; indexDrawn += 1) {
    for (let indexMyGame = 0; indexMyGame < drawNumbers.length; indexMyGame += 1) {
        if(drawNumbers[indexDrawn] === myGame[indexMyGame]){
            numbersHits += 1;
        }
    }
}

console.log( 'Número de acerto',numbersHits)
//console.log(drawNumbers);*/