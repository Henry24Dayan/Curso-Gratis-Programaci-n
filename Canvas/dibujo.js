var d = document.getElementById("Dibujito") ;  //En javascript  getEllementByiD   es el  método de document. que nos trae  una de las ramas de html
var lienzo = d.getContext("2d");               //Definimos si es en 2D o 3D el contexto; getContext es una funcion de canvas que me permite obtener el área donde voy a diibujar.

dibujarlinea("Green", 10,250 , 220 , 10)  //Invocamos la función para que se ejecute.
dibujarlinea("Green", 10,150 , 120 , 40)  //Aca por segunda vez.

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)  //Declaramos las variables como si pusieramos un var; Se declara cada vez que la función es invocada.

{
//Debemos cambiar los valores fijos por los valores variables que vienen del parámetro//
lienzo.beginPath();                 //Definimos la funcion del canvas para inicicar a dibujar.
lienzo.strokeStyle = color ;        // Asignamos el valor que recibe por parámetro.
lienzo.moveTo(xinicial,xfinal)      // Asignamos al función el valor que recibe por parámetro.
lienzo.lineTo(yinicial,  yfinal)    //Asignamos el valor que recibe por parámetro.
lienzo.stroke();                    //Dibuja la línea.
lienzo.closePath();                 //Método para finalizar el dibujo. Cerrar el trazo  (Levantar el lapiz)

}

