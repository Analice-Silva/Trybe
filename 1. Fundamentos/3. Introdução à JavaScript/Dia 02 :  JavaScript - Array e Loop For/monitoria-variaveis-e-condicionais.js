//Descubra a idade mínima dentre três pessoas
//Marina tem 27 anos, Silva tem 18 e Iza tem 63;

const marinaAge = 27;
const silviaAge = 18;
const izaAge = 63;

let minAge;

if (marinaAge < izaAge && marinaAge < silviaAge) {
    minAge = `Marina tem ${marinaAge} anos a idade mínima`;
} else if(silviaAge < marinaAge && silviaAge < izaAge) {
    minAge = `Silvia tem ${silviaAge} anos a idade mínima`;
} else {
    minAge = `Iza tem ${izaAge} anos a idade mínima`;
}

console.log(minAge);


const age = 29;
const sex = 'M';
const weight = 78;
const height = 180;

let result;

if (sex === 'M') {
    result = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5
} else {
    result = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 161
}

console.log('Resultado: ',result);
