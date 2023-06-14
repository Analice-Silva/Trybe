/*
Para fixar
Agora é o momento de consolidar a manipulação dos elementos HTML colocando cor do Administrador de Tempo da Trybe, por meio apenas do JavaScript. Deve ficar como na imagem abaixo.

Administrador de tempo finalizado.
Administrador de Tempo da Trybe finalizado.
Altere a cor de fundo do header para rgb(0, 176, 105);
Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132);
Altere a cor de fundo do título das das tarefas que são Urgentes e Importantes para rgb(165, 0, 243);
Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes para rgb(249, 219, 94);
Altere a cor de fundo do título das das tarefas que não são Urgentes e Importantes para rgb(35, 37, 37);
Altere a cor de fundo do footer para rgb(0, 53, 51).
*/

console.log('Hello!');

document.getElementById('header-container').style.background = 'rgb(0, 176, 105)'
document.getElementById('header-container').style.color = 'white'

//document.querySelectorAll('.emergency-tasks div').style.background = 'rgb(255, 159, 132)'
document.getElementsByClassName('emergency-tasks')[0].style.background = 'rgb(255, 159, 132)';

document.getElementsByClassName('no-emergency-tasks')[0].style.background = 'rgb(249, 219, 94)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  const acessingIndex = emergencyTasksHeaders[index];
  //console.log(acessandoIndex);
  acessingIndex.style.background = 'rgb(165, 0, 243)';
  acessingIndex.style.color = 'white';
}

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  const acessingNoIndex = noEmergencyTasksHeaders[index];
  acessingNoIndex.style.background = ' rgb(35, 37, 37)';
  acessingNoIndex.style.color = 'white';
}

document.getElementById('footer-container').style.background = 'rgb(0, 53, 51)';
document.getElementById('footer-container').style.color = 'white';


