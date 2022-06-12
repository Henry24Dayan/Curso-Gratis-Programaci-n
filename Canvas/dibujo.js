var d = document.getElementById("Dibujito") ;  //En javascript  getEllementByiD   es el  método de document. que nos trae  una de las ramas de html
var lienzo = d.getContext("2d");               //Definimos si es en 2D o 3D el contexto; getContext es una funcion de canvas que me permite obtener el área donde voy a diibujar.


lienzo.beginPath();          //Definimos la funcion del canvas para inicicar a dibujar.
lienzo.strokeStyle = "red" ; // Varible o atributo por ende se comporta como variable y se signa valor.
lienzo.moveTo(100,100)       //Método del canvas para mover el lapiz donde va arrancar la linea
lienzo.lineTo(200,200)       //Creamos la linea, Metodo o funcion del canvas para trazar linea hasta donde se especifica (Aunque pude ser gran variedad de formas y figuras)
lienzo.stroke();             // Dibuja la línea  y la cierra.
lienzo.closePath();          //Método para finalizar el dibujo. Cerrar el trazo  (Levantar el lapiz)

