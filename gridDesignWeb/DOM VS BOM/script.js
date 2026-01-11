/*

let padre = document.getElementById("padre")

//Hijo 1

let hijo1 = document.createElement("div")

hijo1.innerHTML="pacopaco"

padre.appendChild(hijo1)

//Hijo 2

let hijo2 =document.createElement("div")
hijo2.className="circulo"

padre.appendChild(hijo2)

let hijo22 =document.createElement("div")
hijo22.className="circuloRojo"

padre.appendChild(hijo22)

*/

let padre =document.getElementById("padre")

//hijo1

let hijo1 = document.createElement("ul")

hijo1.innerHTML = "Caballeros del zodiaco"

padre.appendChild(hijo1)

//nietos

let nieto1 = document.createElement("li")

nieto1.innerHTML = "Seiya"

hijo1.appendChild(nieto1)

//------------------------------------

let nieto2 = document.createElement("li")

nieto2.innerHTML = "Manolo"

hijo1.appendChild(nieto2)

//------------------------------------

let nieto3 = document.createElement("li")

nieto3.innerHTML = "Sergio"

hijo1.appendChild(nieto3)

//------------------------------------

let hijo5 = document.createElement("div")
hijo5.className = "cuadrado"

padre.appendChild(hijo5)

