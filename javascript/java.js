const carrossel = document.querySelector('.carrossel');
const imagens = document.querySelectorAll('.carrossel img');
const contador = document.getElementById("contador");

let indice = 0;


function mostrarProximaImagem() 
{
    indice = (indice + 1) % imagens.length; 
    carrossel.style.transform = `translateX(${-indice * contador.width}px)`; 
}

setInterval(mostrarProximaImagem, 6000); 


const divs1 = document.querySelectorAll(".backgroundcolor1");
const divs2 = document.querySelectorAll(".backgroundcolor2");
const divs3 = document.querySelectorAll(".backgroundcolor3");
const divs4 = document.querySelectorAll(".backgroundcolor4");
const divs5 = document.querySelectorAll(".backgroundcolor5");

const divs1n = "noturnobackgroundcolor1";
const divs2n = "noturnobackgroundcolor2";
const divs3n = "noturnobackgroundcolor3";
const divs4n = "noturnobackgroundcolor4";
const divs5n = "noturnobackgroundcolor5";

function noturno()
{
    divs1.forEach(div => {div.classList.toggle(divs1n);});
    divs2.forEach(div => {div.classList.toggle(divs2n);});
    divs3.forEach(div => {div.classList.toggle(divs3n);});
    divs4.forEach(div => {div.classList.toggle(divs4n);});
    divs5.forEach(div => {div.classList.toggle(divs5n);});
}