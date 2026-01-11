const sonidoA = new Audio("sonidos/c6-102822.mp3");
const sonidoB = new Audio("sonidos/e6-82016.mp3");
const sonidoC = new Audio("sonidos/g6-82013.mp3");

//#region Manejar tecla
function manejarTecla(event) {    
    const keyPresionado = event.key.toLowerCase();
    let botonPad = null;
    let sonidoPad = null;
    let color;

    if (keyPresionado === 'a') {
       botonPad = document.getElementById('keyA');
       sonidoPad = sonidoA;
       color = "red";
    } else if (keyPresionado === 'b') {
       botonPad = document.getElementById('keyB');
       sonidoPad = sonidoB;
       color = "green";
    } else if (keyPresionado === 'c') {
       botonPad = document.getElementById('keyC');
       sonidoPad = sonidoC;
       color = "blue";
    } 
    if (event.type === 'keydown') {        
        botonPad.style.backgroundColor = color;        
        sonidoPad.play();          
    }
    
    if (event.type === 'keyup') {
        botonPad.style.backgroundColor = 'white'; 
    }
}
//#endregion

document.addEventListener('keydown', manejarTecla);
document.addEventListener('keyup', manejarTecla);

//#region Coordenadas
document.addEventListener("mousemove", (e)=>{
    
    const x = event.clientX; 
    const y = event.clientY;

    document.getElementById("coordX").innerHTML = x;
    document.getElementById("coordY").innerHTML = y;
});


//#endregion