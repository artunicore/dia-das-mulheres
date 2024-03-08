function mostrarPagina() {
    var pagina = document.getElementById("pagina-secreta");
    pagina.style.display = "block";
    var botao = document.getElementById("coracao-btn");
    botao.style.display = "none";
    var container = document.querySelector(".container")
    container.classList.remove("container")
    var conteudo = document.getElementById("conteudo")
    conteudo.parentNode.removeChild(conteudo)
  }
function createDigit() {
    const digit = document.createElement('div');
    digit.classList.add('cascade-digit');
    digit.innerText = Math.round(Math.random());

    // Set random position
    const randomLeft = Math.random() * window.innerWidth;
    digit.style.left = `${randomLeft}px`;

    document.getElementById('cascade-container').appendChild(digit);
}

// Create digits every 100 milliseconds
setInterval(createDigit, 25);
