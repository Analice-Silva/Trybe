/*let message = '';

const twoIsEqualToTwo = 2 === 2
const twoIsHigherThanOne = 2 > 1

if(twoIsEqualToTwo && twoIsHigherThanOne) {
    message = '2 é estritamente igual a 2, 2 é maior do que 1'
}*/

/*
const personAge = 18;
let message = '';

if (personAge >= 18 && personAge < 22) {
    message = 'Paga meia entrada';
} else if (personAge < 18) {
    message = 'Ainda não pode entrar :('
} else {
    message = 'Paga inteira'
}

console.log(message);*/

const ticket = '2023M314';
let message = '';

switch (ticket) {
    case '2023M314':
        message = 'Meia: Dirija-se até a fila A';
        break;
    case '20231NT3IRA':
        message = 'Inteira: Dirija-se até a fila B';
        break;
    default:
        message = 'Código inválido';
}

console.log(message);




