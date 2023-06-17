  // Crie um irmão para `elementoOndeVoceEsta`.
const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);
//console.log(pai);

// Crie um filho para `elementoOndeVoceEsta`.
const filhoElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filho = document.createElement('section');
filho.id = 'filhoDoElementoOndeVoceEsta';
filhoElementoOndeVoceEsta.appendChild(filho);
//console.log(pai);

// Crie um filho para `primeiroFilhoDoFilho`.
const filhoDoprimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const criandoFilho = document.createElement('div');
criandoFilho.classList = 'euSouFilhoDoPrimeiroFilho';
filhoDoprimeiroFilhoDoFilho.appendChild(criandoFilho);
//console.log(pai);

// A partir desse filho criado, acesse `terceiroFilho`.
const acessTerceiroFilho = filhoDoprimeiroFilhoDoFilho;
acessTerceiroFilho.parentElement;
acessTerceiroFilho.nextElementSibling
console.log(acessTerceiroFilho)


