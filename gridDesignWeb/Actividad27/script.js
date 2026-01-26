const padre = document.getElementById("padre")

window.addEventListener("load", posicionarYGenerar)

function posicionarYGenerar() {
    
    for(let i = 0; i < 5; i++){
 
        let sprite = document.createElement("div")
        let simbolo = ""

        const coordX = Math.random() * (window.innerWidth - 100)
        const coordY = Math.random() * (window.innerHeight - 100)

        switch (i){
            case 0: simbolo = "♜"; break;
            case 1: simbolo = "♛"; break;
            case 2: simbolo = "♚"; break;
            case 3: simbolo = "♝"; break;
            case 4: simbolo = "♞"; break;
        }

        sprite.innerHTML = simbolo
        sprite.style.position = "absolute"
        sprite.style.fontSize = "90px"
        sprite.style.top = coordY + "px"
        sprite.style.left = coordX + "px"

        padre.appendChild(sprite)
    }
}

function borrarTodos() {
    padre.innerHTML = ""
}