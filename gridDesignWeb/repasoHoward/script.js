const semaforo = document.getElementById("semaforo");
const botonCambio = document.getElementById("botonCambio");

semaforo.style.backgroundColor = "red";
let color = "red"
semaforo.innerHTML = "PARE";

botonCambio.addEventListener("click" , cambiarColor);

function cambiarColor(){

    if(color == "red"){
        semaforo.style.backgroundColor = "green";
        semaforo.innerHTML = "SIGA";        
        color = "green";
    }
    else if(color == "green"){
        semaforo.style.backgroundColor = "yellow";
        semaforo.innerHTML = "PRECAUCION";
        color = "yellow";
    }
    else if(color== "yellow"){
        semaforo.style.backgroundColor="red";
        semaforo.innerHTML = "PARE";
        color = "red";
    }

}

