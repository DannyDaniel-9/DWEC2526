let activo = null;
document.getElementById("Borrar").addEventListener("click" , ()=>{
    document.getElementById("folio").innerHTML = "";
});

document.getElementById("Act").addEventListener("click",()=>{
    activo = true;
});

document.getElementById("Des").addEventListener("click",()=>{
    activo = false;
});

document.addEventListener("keydown" , (e)=>{
    console.log("entrando en la funcion manejadora teclado");
    console.log(`activo vale ${activo}`);
    if(activo){       
            document.getElementById("folio").textContent += e.key;        
    }else
        return;
});