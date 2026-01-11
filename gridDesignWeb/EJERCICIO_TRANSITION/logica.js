// 1. Seleccionar los Elementos (Jugadores y Botones)
const jugador = document.getElementById("jugador");
const jugador2 = document.getElementById("jugador2");

const btnIzquierda = document.getElementById("btn-izq");
const btnDerecha = document.getElementById("btn-der");
const btnArriba = document.getElementById("btn-arr");
const btnAbajo = document.getElementById("btn-aba");
const btnReset = document.getElementById("btn-reset");

btnIzquierda.addEventListener("click", function() {
    jugador.style.left = "100px";
    jugador2.style.left = "500px";
});

btnDerecha.addEventListener("click", function() {
    jugador.style.left = "500px";
    jugador2.style.left = "100px";
});

btnArriba.addEventListener("click", function() {
    jugador.style.top = "200px";
    jugador2.style.top = "800px";
});

btnAbajo.addEventListener("click", function() {
    jugador.style.top = "800px";
    jugador2.style.top = "200px";
});

btnReset.addEventListener("click", function() {
    jugador.style.left = "500px";
    jugador.style.top = "200px";
    
    jugador2.style.left = "500px";
    jugador2.style.top = "800px";
});