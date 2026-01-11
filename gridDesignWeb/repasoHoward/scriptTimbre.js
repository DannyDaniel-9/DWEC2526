const timbre = document.getElementById("timbre");

timbre.style.backgroundColor = "gray";
document.addEventListener("keydown" , activar); //SIEMPRE USAR DOCUMENT PARA EVENTOS GENERALES COMO MOVER MOUSE O PRESIONAR TECLAS

function activar(egg){

    if(egg.key == "r"){
        timbre.style.backgroundColor = "red";
    }    
}

document.addEventListener("keyup",desactivar);

function desactivar(egg){
    if(egg.key = "r"){
        timbre.style.backgroundColor = "gray";
    }
}
