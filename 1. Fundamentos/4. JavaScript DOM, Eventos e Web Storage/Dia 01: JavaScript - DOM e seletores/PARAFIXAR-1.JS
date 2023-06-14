/*
Para fixar
Agora você vai colocar em prática a utilização das 3 funções apresentadas. Faça os exercícios propostos utilizando JavaScript.

De olho na dica 👀: entender como o html está estruturado irá te ajudar a recuperar os elementos com JavaScript de forma mais assertiva. Ou seja, primeiro entenda o html e depois manipule os elementos com javascript.

Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.
Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.
Recupere o subtítulo e altere-o para: Principais informações.
Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.
Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro
Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha.
De olho na dica 👀: Você pode usar o site IMDb para buscar as informações. 😉 No canto superior direito da página você consegue traduzir para português, se você preferir.
*/

document.getElementById('page-title').innerText = 'O amanhecer';
document.getElementById('first-paragraph').innerText = 'Após a Primeira Guerra Mundial, uma jovem tem sua família assassinada pelo próprio pai violento. Agora vivendo em um convento, ela tenta fugir dos fantasmas do passado que atormentam a sua vida.';
document.getElementById('subtitle').innerText = 'Principais informações.';

const fonte = document.getElementsByClassName('paragraph-style')[0];
fonte.style.fontStyle = 'italic';

document.getElementsByClassName('paragraph-style')[1].innerText = 'Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro';

const cor = document.getElementsByTagName('h2');
cor[0].style.color = 'red';

