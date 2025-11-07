const resultado = document.getElementById("resultado")
const resultado2 = document.getElementById("resultado2")

const xPosition = document.getElementById("xPosition")
const yPosition = document.getElementById("yPosition")


let lastX = 0;
let lastY = 0;
let lastX2 = 0;
let lastY2 = 0;

function posicionar(){

    if(xPosition.value > lastX){
        resultado.style.backgroundImage =  "url(Terry_Right.png)";
    }
    else if(xPosition.value < lastX){
        resultado.style.backgroundImage=  "url(Terry_Left.png)";
    }
    
    resultado.style.left =xPosition.value +"px";
    resultado.style.top =yPosition.value + "px";

    lastX = xPosition.value;
    lastY = yPosition.value;
    
}
 //FORMULA PARA RANDOM ENTRE INTERVALOS ---->  (Math .random()*(max-min+1)) +min
function randomizar(){             
    randomXPosition = Math.floor(Math.random()*(1700 - 0 +1))+0 ;
    randomYPosition = Math.floor(Math.random()*(650 - 0 +1))+0 ;
    resultado.style.left=randomXPosition + "px";
    resultado.style.top= randomYPosition + "px";

    if(randomXPosition > lastX){
        resultado.style.backgroundImage=  "url(MoscaRight.gif)";    
    }
    else if(randomXPosition < lastX){
       resultado.style.backgroundImage =  "url(MoscaLeft.gif)";
    }
   
    
    lastX = randomXPosition;
    lastY = randomYPosition;
}

function randomizar2(){             
    randomXPosition2 = Math.floor(Math.random()*(1700 - 0 +1))+0 ;
    randomYPosition2 = Math.floor(Math.random()*(650 - 0 +1))+0 ;
    resultado2.style.left=randomXPosition2 + "px";
    resultado2.style.top= randomYPosition2 + "px";

    if(randomXPosition2 > lastX2){
        resultado2.style.backgroundImage=  "url(MoscaRight.gif)";    
    }
    else if(randomXPosition2 < lastX2){
       resultado2.style.backgroundImage =  "url(MoscaLeft.gif)";
    }
   
    
    lastX2 = randomXPosition2;
    lastY2 = randomYPosition2;
}


function smashFly(){
    clearInterval(movimientoMosca);
    resultado.style.backgroundImage = "url(smashAnimation.gif)";
    resultado.style.backgroundSize="300px";
    setTimeout(() => {resultado.style.display = "none";}, 2000);
}
function smashFly2(){
    clearInterval(movimientoMosca2);
    resultado2.style.backgroundImage = "url(smashAnimation.gif)";
    resultado2.style.backgroundSize="300px";
    setTimeout(() => {resultado2.style.display = "none";}, 2000);
}

let movimientoMosca = setInterval(randomizar, 400);
let movimientoMosca2 = setInterval(randomizar2, 400);