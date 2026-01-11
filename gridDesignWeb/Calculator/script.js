let mensajeLog ="";
let resultado = "";
let alturaMinima = 20;

const operando1 =document.getElementById("operando1");
const operando2 =document.getElementById("operando2");
const operacion =document.getElementById("operacion");
const divResultado = document.getElementById("resultado");
const cuadroLogs = document.getElementById("cuadroLogs");


function calcular(){
    switch(operacion.value){
        case "multiplicar":
            resultado = parseFloat(operando1.value) * parseFloat(operando2.value);
            mensajeLog += `<span style="color:blue">${operando1.value} x ${operando2.value} = ${resultado}</span><br>`;
            break;
        case "dividir":
            resultado = parseFloat(operando1.value) / parseFloat(operando2.value);
            mensajeLog += `<span style="color:red">${operando1.value} / ${operando2.value} = ${resultado}</span><br>`;            
            break;
        case "sumar":
            resultado = parseFloat(operando1.value) + parseFloat(operando2.value);
            mensajeLog += `<span style="color:yellow">${operando1.value} + ${operando2.value} = ${resultado}</span><br>`;         
            break;
        case "restar":
            resultado = parseFloat(operando1.value) - parseFloat(operando2.value);
            mensajeLog += `<span style="color:pink">${operando1.value} - ${operando2.value} = ${resultado}</span><br>`; 
            break;
    }

    if (resultado % 2 == 0) {    
        document.body.style.backgroundColor = "green";
    }else{
        document.body.style.backgroundColor = "blue";
    }


    divResultado.innerHTML = resultado ;
    cuadroLogs.innerHTML = mensajeLog;
    cuadroLogs.style.height = alturaMinima + "px";
    alturaMinima += 20;

}

function limpiarHistorial(){
    mensajeLog = "";
    cuadroLogs.innerHTML = mensajeLog;
    alturaMinima = 20;
    cuadroLogs.style.height = alturaMinima + "px";
}



