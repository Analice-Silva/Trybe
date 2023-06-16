
/*  EVENTOS
        são ações que acontecem quando o usuário ou o navegador manipula uma página, 
        permitindo que os elementos de uma página da web mudem dinamicamente.   */

        window.onload = () => {
            // Captura de elementos que iremos usar:
            const startBtn = document.getElementById('start-race-btn'); // captura o botao start
            const resetBtn = document.getElementById('reset-race-btn'); // captura o botao reset
            const player1 = document.getElementById('player1');         // captura o elemento player1
            const player2 = document.getElementById('player2');         // captura o elemento player2
            const audioWinner = document.getElementById('audioWinner'); // captura o elemento de audio
        
            player1.style.marginLeft = 0;
            player2.style.marginLeft = 0;
        
            startBtn.addEventListener( 'click' , () => { 
                player1.style.marginLeft = (parseInt(player1.style.marginLeft)) + gerarNumeroAleatorio() + 'px';
                player2.style.marginLeft = (parseInt(player2.style.marginLeft)) + gerarNumeroAleatorio() + 'px';
        
                const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
                const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;
        
                if (player1Win) {
                    alert('PLAYER 1 VENCEU');
                    audioWinner.play();
                    reset();
                } else if (player2Win) {
                    alert('PLAYER 2 VENCEU');
                    audioWinner.play();
                    reset();
                }
            });
        
            const cars = document.querySelectorAll('.car');
            for (let car of cars) {
                car.addEventListener('click', (event) => {
                    const selected = document.querySelector('.selected');
                    if (selected) {
                        selected.classList.remove('selected');
                    }
        
                    event.target.classList.add('selected');
                });
            }
        
            const personagens = document.querySelectorAll('.playersImages');
            for (let personagem of personagens) {
                personagem.addEventListener('click', (event) => {
                    const selected = document.querySelector('.selected');
                    if (selected) {
                        selected.style.backgroundImage = (`url(${event.target.src})`);
                        selected.classList.remove('selected');
                    }
                });
            }
        
        };
        
        function reset() {
            const player1 = document.getElementById('player1');         // captura o elemento player1
            const player2 = document.getElementById('player2');         // captura o elemento player2
            player1.style.marginLeft = 0;
            player2.style.marginLeft = 0;
            player1.style.backgroundImage = 'url(./files/selectPlayer.png)';
            player2.style.backgroundImage = 'url(./files/selectPlayer.png)';
        }
        
        function gerarNumeroAleatorio () {
            return (Math.random() * 400);
        }
















/*Eventos => são ações que acontece quando o usuário ou o navegador manipula uma página, permitindo que os elementos de uma página da web mudem dinamicamente. Quando formos utilizar onload ela espera receber uma função.
//Escutador de evento (addEventListener) */
//startBtn.addEventListener('click', cliqueDoBotao) //observe que quando usamos addEventListener ao chamar a função cliqueBotao não usamos parênteses
/*function cliqueDoBotao () {
essa função corresponde a linha 23
}*/
/*
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

        player1.style.marginLeft = (parseInt(player1.style.marginLeft + gerarNumeroAleatorio() + 'px')
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

function gerarNumeroAleatorio () {
    return (Math.random * 400)
}
*/