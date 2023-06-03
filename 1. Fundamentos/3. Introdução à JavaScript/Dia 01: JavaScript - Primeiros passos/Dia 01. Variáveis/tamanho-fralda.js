let fralda; //RN, RN+, P, M, G, XG, XXG
let pesoBebe = 6;

if(pesoBebe <= 4){
    fralda = 'RN';
}
else if(pesoBebe > 4 && pesoBebe <= 6){
    fralda = 'RN+';
}
else if(pesoBebe > 6 && pesoBebe <= 8) {
    fralda = 'P';
}
else if(pesoBebe > 8 && pesoBebe <= 10) {
    fralda = 'M';
}
else if(pesoBebe > 10 && pesoBebe <= 12) {
    fralda = 'G';
}
else if(pesoBebe > 12 && pesoBebe <= 14) {
    fralda = 'XG';
}
else if(pesoBebe > 14){
    fralda = 'XXG';
}
else{
    console.log('Informe um valor válido');
}

console.log('Tamanho da fralda do seu bebê é', fralda);
