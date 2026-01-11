const character = document.getElementById("character");
const container = document.getElementById("container");
const maxX = container.clientWidth - character.clientWidth - 4;
const maxY = container.clientHeight - character.clientHeight - 4;
const GAP = 20;
let interval = null;

document.addEventListener("keydown" , move);
let initialPositionX = 750;
let initialPositionY = 300;

function move(e){
    switch(e.key){
            case "a": 
                initialPositionX -= GAP;
                character.style.backgroundImage = "url(sprites/galagaLEFT.png)";      
                if(initialPositionX < 0){                    
                    gameOver();                    
                }      
                break;
            case "d": 
                initialPositionX += GAP;
                character.style.backgroundImage = "url(sprites/galagaRIGHT.png)";  
                if(initialPositionX > maxX){                    
                    gameOver();
                }
                break;
            case "w":
                initialPositionY -= GAP;
                character.style.backgroundImage = "url(sprites/galagaUP.png)";  
                if(initialPositionY < 0){                   
                    gameOver();
                }
                break;
            case "s":
                initialPositionY += GAP;
                character.style.backgroundImage = "url(sprites/galagaDOWN.png)";  
                if(initialPositionY > maxY){
                    gameOver();                    
                }
                break;
        }
        character.style.left = initialPositionX + "px";
        character.style.top = initialPositionY + "px";
        collision();           
}



function collision(){
    if(crash(document.getElementById("obstacle1")) || crash(document.getElementById("obstacle2"))){
        gameOver();
    }
    if(crash(document.getElementById("obstacle3")) || crash(document.getElementById("obstacle4"))){
        gameOver();
    }
    if(crash(document.getElementById("obstacle5")) || crash(document.getElementById("obstacle6"))){
        gameOver();
    }
}

function gameOver(){
    container.innerHTML = "<div style='height:100%; display:flex; justify-content:center; align-items:center;'><h1>GAME OVER</h1></div>";
}

function crash(enemy) {
    
    let enemyLeft = enemy.offsetLeft;
    let enemyTop = enemy.offsetTop;
    let enemyRight = enemyLeft + enemy.clientWidth;
    let enemyBottom = enemyTop + enemy.clientHeight;

    let playerRight = initialPositionX + character.clientWidth; 
    let playerBottom = initialPositionY + character.clientHeight; 

    if (playerRight > enemyLeft && initialPositionX < enemyRight && playerBottom > enemyTop && initialPositionY < enemyBottom) {
        return true;
    }
    return false;
}
