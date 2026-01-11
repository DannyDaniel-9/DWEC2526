let contador = 0;

const divInteractivo = document.getElementById("divInteractivo");
const colorGUI = document.getElementById("colorGUI");
const contadorGUI = document.getElementById("contadorGUI");

//#region Generar color random
function generarColorRandom(){
    const letras = '0123456789ABCDEF' ;
    let color = '#';

    for(let i = 0; i < 6 ; i++) {
        color += letras[Math.floor(Math.random() * 16)]
    }
    return color;
}
//#endregion

//#region Evento Mouse Over

divInteractivo.addEventListener('mouseover' , contadorYAlerta);

function contadorYAlerta() {

    contador++;
    contadorGUI.innerHTML = contador;

    const pokemonID = Math.floor(Math.random() * 1000) + 1;
    const pokemonURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`;
    divInteractivo.innerHTML = `<img src="${pokemonURL}" alt="Pokemon" style="height: 100%; object-fit: contain;"><br>`;


    if (contador % 10 === 0){
        alert('ALERTAAA DECENAA! \n El contador alcanzo '+ contador  );
    }

}

//#endregion

//#region Evento Mouse Out

divInteractivo.addEventListener('mouseout' , cambiarColorFondo);

function cambiarColorFondo() {

    const nuevoColor = generarColorRandom();
    document.body.style.backgroundColor = nuevoColor;
    colorGUI.innerHTML =  nuevoColor;

}

//#endregion