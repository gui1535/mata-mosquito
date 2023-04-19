function verificarTamanhoDaTela() {
  console.log(window.innerWidth)
  if (window.innerWidth <= 980) { // Se a largura da janela for menor que 768 pixels
    Swal.fire('Não é recomendado iniciar o jogo com esse tamanho de tela')
  } else {
    Swal.close();
  }
}

window.addEventListener("resize", verificarTamanhoDaTela); // Adiciona um event listener para verificar o tamanho da tela quando a janela é redimensionada
