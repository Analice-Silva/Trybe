// SELETORES
const hrefLink = document.querySelector("#href");
hrefLink.addEventListener('click', (evento) => {
    evento.preventDefault();
});

const inputCheckbox = document.querySelector("#input-checkbox");
inputCheckbox.addEventListener('click', (evento) => {
    evento.preventDefault();
});

const inputText = document.querySelector("#input-text");
inputText.addEventListener('keypress', (evento) => {
    const pegaCaractere = evento.key;
    if (pegaCaractere !== 'a') {
        evento.preventDefault();
    }
});



