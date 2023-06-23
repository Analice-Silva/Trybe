window.onload = () => {
    const butao = document.querySelector('button[type=submit]');
    butao.addEventListener('click', (event) => {
       const nomeCompleto = document.getElementById('nome-completo');
       //console.log(nomeCompleto.value);
        if (nomeCompleto.value.length < 5) {
            event.preventDefault();
            alert('Insira seu nome completo');
        }
    });
};