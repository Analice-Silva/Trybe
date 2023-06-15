/*Eventos => são ações que acontece quando o usuário ou o navegador manipula uma página, permitindo que os elementos de uma página da web mudem dinamicamente. Quando formos utilizar onload ela espera receber uma função.
//Escutador de evento (addEventListener) */
//startBtn.addEventListener('click', cliqueDoBotao) //observe que quando usamos addEventListener ao chamar a função cliqueBotao não usamos parênteses


window.onload = () => {

    const startBtn = document.getElementById('start-race-btn');
    const resetBtn = document.getElementById('reset-race-btn');
    const player1 = document.getElementById('player1');  
    const player2 = document.getElementById('player2'); 
    const audioWinner = document.getElementById('audioWinner'); 
    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;

    startBtn.addEventListener('click', (event) => {
        event.target.innerText = 'FOI';
    });
    
    const cars = document.querySelectorAll('.car');
    for (let car of cars) {
        car.addEventListener('click', (e) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
            e.target.classList.add('selected');
        })
    }

    const persons = document.querySelectorAll('.playerImages');
    for (let person of persons) {
        person.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.style.backgroundImage = (`url(${event.target.src})`);
                selected.classList.remove('.selected');
            }
        })
    }
}

/*function cliqueDoBotao () {
essa função corresponde a linha 23
}*/