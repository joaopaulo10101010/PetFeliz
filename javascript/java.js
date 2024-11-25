const carrossel = document.querySelector('.carrossel');
const imagens = document.querySelectorAll('.carrossel img');
const contador = document.getElementById("contador");

let indice = 0;


function mostrarProximaImagem() {
    indice = (indice + 1) % imagens.length; // Alterna para a próxima imagem, reiniciando no final
    carrossel.style.transform = `translateX(${-indice * contador.width}px)`; // Move o carrossel
}

setInterval(mostrarProximaImagem, 6000); // Alterna a cada 3 segundos

