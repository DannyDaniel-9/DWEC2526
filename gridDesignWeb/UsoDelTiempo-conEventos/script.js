/*setTimeout(miFuncion,1000); solo sucede una vez

function miFuncion(){
    alert();
}

//setInterval(()=>{console.log("hola");},2000);

setInterval(()=>{
    alert();
},2000)

*/

const numero = document.getElementById("numero");
const botonContador = document.getElementById("botonContador");

setTimeout(() => {
    document.getElementById("boton").style.display = "block";
}, 3000);

botonContador.addEventListener("click" , ()=>{
    let contador = parseInt(numero.innerText);

    let intervalo = setInterval(()=>{
        contador -= 1 ;
        numero.innerHTML = "<p>"+contador+"</p>";
        
        if (contador <= 0){
            clearInterval(intervalo)
            numero.innerHTML = "COUNTDOWN TERMINATED";           
        }
    } , 1000);
})