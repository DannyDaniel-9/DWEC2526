const resultado =document.getElementById("resultado");

function piensaEnVerde(){
    resultado.style.backgroundColor="green";
}

function muestraVehiculo(){

    const imagenSeleccionada = document.getElementById("vehiculo_select").value;

    switch(imagenSeleccionada){
        case "coche":
            resultado.style.backgroundImage= "url(coche.png)";
            break;
        case "moto":
            resultado.style.backgroundImage= "url(moto.jpeg)";
            break;
        case "camion":
            resultado.style.backgroundImage= "url(camion.png)";
            break;
        
    }
}