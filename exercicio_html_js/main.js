const form = document.getElementById('form-ebac');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Formulário valido!`;
    if (campoA.value > campoB.value) {
        document.querySelector('.erro-message').style.display = 'none';
        campoA.style.border = '';
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    } else {
        document.querySelector('.sucess-message').style.display = 'none';
        campoA.style.border = '1px solid red';
        document.querySelector('.erro-message').style.display = 'block'
    }
})
