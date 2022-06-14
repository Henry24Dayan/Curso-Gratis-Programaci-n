
var d = document.getElementById("Dibujo") ;  //En javascript  getEllementByiD   es el  método de document. que nos trae  una de las ramas de html
var lienzo = d.getContext("2d");               //Definimos si es en 2D o 3D el contexto; getContext es una funcion de canvas que me permite obtener el área donde voy a diibujar.
var lineas = 30;    //Definimos el límite de raayas
var l = 0;            //Ciclo//contador 
var yi, xf;          //Definimos dos variables vacias.

//Para tener un ciclo debemos tener unn límite para que no sea infinito. //
for(l = 0; l < lineas; l++)  //Este ciclo see  ejecutara hasta que esto se cumpla.

{

    yi = 10  * l; // Creamos la  operación que se ejecutaaraa.
    xf = 10  * (l + 1);// Creamos la  operación que se ejecutaaraa.

    dibujarlinea("blue",0,yi,xf,300);  //Invocamos la función para que se ejecute.

     l++;  // Le sumamos 1 cada vez que se dibuje una linea 
}





function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)  //Declaramos las variables como si pusieramos un var; Se declara cada vez que la función es invocada.

{
//Debemos cambiar los valores fijos por los valores variables que vienen del parámetro//
lienzo.beginPath();                 //Definimos la funcion del canvas para inicicar a dibujar.
lienzo.strokeStyle = color ;        // Asignamos el valor que recibe por parámetro.
lienzo.moveTo(xinicial,xfinal)      // Asignamos al función el valor que recibe por parámetro.
lienzo.lineTo(yinicial,yfinal)    //Asignamos el valor que recibe por parámetro.
lienzo.stroke();                    //Dibuja la línea.
lienzo.closePath();                 //Método para finalizar el dibujo. Cerrar el trazo  (Levantar el lapiz)

}

 
