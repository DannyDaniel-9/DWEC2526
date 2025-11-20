var jugador = document.getElementById("jugador");
var jugador2 =document.getElementById("jugador2");

function moverIzquierda(){
    jugador.style.left= "100px";
    jugador2.style.left = "500px";
}
function moverDerecha(){
    jugador.style.left= "500px";
    jugador2.style.left= "100px";
}
function moverArriba(){
    jugador.style.top= "200px";
    jugador2.style.top= "800px";
}
function moverAbajo(){
    jugador.style.top= "800px";
    jugador2.style.top= "200px";
}
function volver(){
    jugador.style.left= "500px";
    jugador.style.top= "200px";
    jugador2.style.left= "500px";
    jugador2.style.top= "800px";
}