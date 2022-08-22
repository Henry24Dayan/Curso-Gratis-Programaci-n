    var teclas = {      //Definimos un objeto literal

        UP : 38,            //Variables    
        DOWN : 40,
        LEFT : 37,
        RIGHT : 39


                }

                
document.addEventListener("keyup", dibujarTeclado); //Key Up es la funcion del Listener y el lanzador que ejecuta la funcion
var c = document.getElementById("area1");
var papel = c.getContext("2d"); 

dibujarlinea("blue",100,100,200,200,papel);


function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)  //Declaramos las variables como si pusieramos un var; Se declara cada vez que la función es invocada.

{
//Debemos cambiar los valores fijos por los valores variables que vienen del parámetro//
lienzo.beginPath();                 //Definimos la funcion del canvas para inicicar a dibujar.
lienzo.strokeStyle = color ;        // Asignamos el valor que recibe por parámetro.
lienzo.moveTo(xinicial,xfinal)      // Asignamos al función el valor que recibe por parámetro.
lienzo.lineTo(yinicial,yfinal)    //Asignamos el valor que recibe por parámetro.
lienzo.stroke();                    //Dibuja la línea.
lienzo.closePath();                 //Método para finalizar el dibujo. Cerrar el trazo  (Levantar el lapiz)

}

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
    default :                       // Es como lo que se ejecuta sino se cumople con ninguna de las variables en el switch.
    console.log("Otra tecla")
    break;
}

}

