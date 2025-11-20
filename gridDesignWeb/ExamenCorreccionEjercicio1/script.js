var mensaje = "";
const log = document.getElementById("log1");

function mostrarAlert(){
    mensaje += "Has pulsado alert y lo sabes<br>";
}

function mostrarPrompt(){
    const prompt = prompt("introduce tu proximo destino?");
    mensaje += "/n El usuario quiere ir a" + prompt;
}

function mostrarConfirm() {
    const confirmacion = document.getElementById("confirm");

    if(confirmacion.value){
        mensaje += "/n El usuario cree que atlas SI es un ovni";        
    }else if(!confirmacion.value){
        mensaje += "/n El usuario cree que atlas NO es un ovni";
    }
}

function borrarLog() {
    mensaje = "";
    log.innerHTML(mensaje);
}

log.innerHTML(mensaje);

