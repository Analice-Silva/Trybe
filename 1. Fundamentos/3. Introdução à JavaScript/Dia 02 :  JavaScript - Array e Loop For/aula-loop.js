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
    const numeroAleatorio = Math.floor(Math.random() * 60)
    console.log(numeroAleatorio);
}
