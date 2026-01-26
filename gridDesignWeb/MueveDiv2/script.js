const contenedor =document.getElementById("contenedor")
const velocidadNave = 20
const velocidadMeteoros = 14

const audioMenu = document.getElementById("audioMenu");
const audioJuego = document.getElementById("audioJuego");

let nave

document.addEventListener("keydown" , mover);
document.addEventListener("click",activarAudioMenu)

function empezarJuego(){
    const botonStart = document.getElementById("botonStart")
    botonStart.remove();

    nave = document.createElement("div")
    nave.className = "nave"
    
    contenedor.appendChild(nave)
    
    activarAudioJuego()
    actualizarInterfaz()
    caerMeteoros()
}

function caerMeteoros(){
   
    generarMeteoros()

    setInterval(() => {        
        const meteoros = document.getElementsByClassName("meteoro");

        for (let i = meteoros.length - 1 ; i >= 0 ; i--){
            let meteoro = meteoros[i]

            meteoro.style.top = (meteoro.offsetTop + velocidadMeteoros) +"px"

            if (meteoro.offsetTop > contenedor.offsetHeight) {
                contenedor.removeChild(meteoro); 
            }
        }

        if (meteoros.length === 0) {
            generarMeteoros();
        }

    },20);
}

function generarMeteoros(){

    for (let i = 0 ; i < 5 ; i++ ){
        let meteoro = document.createElement("div")
        meteoro.className = "meteoro"
        let posicionX = Math.random() * (contenedor.clientWidth - 40)
        let posicionY = -(Math.random() * 500 + 100)

        meteoro.style.left = posicionX + "px"
        meteoro.style.top = posicionY + "px"

        contenedor.appendChild(meteoro)

    }
}

function mover(e){
    switch(e.key){
            case "a": 
                nave.style.left = nave.offsetLeft - velocidadNave + "px";                  
                if(nave.offsetLeft <= 0){                    
                    nave.style.left = 0 + "px"                   
                }      
                break;
            case "d": 
                nave.style.left = nave.offsetLeft + velocidadNave + "px";                  
                if(nave.offsetLeft + nave.clientWidth >= contenedor.clientWidth){                    
                    nave.style.left = contenedor.clientWidth - nave.clientWidth + "px"
                }
                break;
            case " ":
                generarDisparo();
                break;            
        }  
}

function actualizarInterfaz() {
    document.getElementById("velocidadNave").innerText = velocidadNave;
    document.getElementById("velocidadMeteoro").innerText = velocidadMeteoros;
}

function activarAudioMenu(){
    audioMenu.play()
}

function activarAudioJuego(){
    audioMenu.pause()
    document.removeEventListener("click", activarAudioMenu);
    audioJuego.play()
}

