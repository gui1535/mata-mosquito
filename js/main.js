function iniciarJogo() {
    var nivel = document.getElementById('nivel').value

    if (nivel === '') {
        Swal.fire('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href = "app.html?" + nivel
}

document.getElementById('btn-iniciar-jogo').addEventListener('click', iniciarJogo);