    var teclas = {      //Definimos un objeto literal

    UP : 38,            //Variables    
    DOWN : 40,
    LEFT : 37,
    RIGHT : 39


}


document.addEventListener("keyup", dibujarTeclado) //Key Up es la funcion del Listener y el lanzador que ejecuta la funcion

function dibujarTeclado(evento)  //Definimos la funcion y ponemos el parametro que almacenara todos los eventos

{

switch(evento.keyCode)               // Estructura de control
{
    case teclas.DOWN :
        console.log("Abajo")
    break;
    case teclas.UP :
        console.log("Arriba")
    break;
    case teclas.LEFT :
        console.log("Izquierda")
    break;
    case teclas.RIGHT:
        console.log("Derecha")
    break;
}

}

