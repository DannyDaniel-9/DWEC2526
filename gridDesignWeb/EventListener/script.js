
const contenedor = document.getElementById("contenedor");

contenedor.addEventListener("click" , mostrarCoordenadas );

function mostrarCoordenadas(e){
    console.log(e.clientX);
    console.log(e.clientY);
    console.log("Haz hecho click en "+e.clientX+","+e.clientY);
}

/*
function manejoTecla(e){
    //console.log(e);
    console.log(e.keyCode);
}
*/





