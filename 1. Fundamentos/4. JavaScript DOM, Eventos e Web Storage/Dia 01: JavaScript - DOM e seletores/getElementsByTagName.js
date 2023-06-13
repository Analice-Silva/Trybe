// o getElementsByTagName ele é uma função que sempre nos retorna uma lista de elementos e que nunca retorna apenas 1 elemento com acesso direto

// o getElementsByTagName vai servir pra gente quando a gente quiser alterar propriedades, ou buscar o conteudo de tudo que tiver uma mesma tag, então, eu quero pegar os todos os textos que estão dentro do parágrafo, eu vou usar getElementsByTagName

document.getElementsByTagName('p')[3].innerText = 'Alterando a posição 3 do parágrafo p';


