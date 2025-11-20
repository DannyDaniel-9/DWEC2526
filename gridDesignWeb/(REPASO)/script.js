
const resultado = document.getElementById("resultado");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const edad = document.getElementById("edad");
    const aficiones = document.getElementById("aficiones");
    const colorFondo = document.getElementById("colorPicker");
    const colorSprite = document.getElementById("color");
    const sprite = document.getElementById("sprite");
    const contenedor = document.getElementById("contenedor");




function mandarDatos(){
    
    resultado.style.color="orange";

    let mensaje = "";
    mensaje += "<h3>Nombre: " + nombre.value + "</h3><br>";
    mensaje += "<h3>Apellidos: " + apellidos.value + "</h3><br>";
    mensaje += "<h3>Edad: " + edad.value + "</h3><br>";
    mensaje += "<h3>Aficiones: " + aficiones.value + "</h3>";

    resultado.innerHTML=mensaje;

    contenedor.style.backgroundColor=colorFondo.value;



    switch(colorSprite.value){
        case "rojo":
            sprite.style.backgroundColor="red";
            break;
        case "verde":
            sprite.style.backgroundColor="green";
            break;
        case "azul":
            sprite.style.backgroundColor="blue";
            break;
        default:
            sprite.style.backgroundColor = "gray";

    }


    
}
