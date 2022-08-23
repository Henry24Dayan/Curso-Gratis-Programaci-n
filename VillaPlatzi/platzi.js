var vp = document.getElementById("villaplatzi"); // Definimos variable para traer el canvas del html
var papel = vp.getContext("2d");                 // Le damos el contecto 2d en este caso   
var mapa = "tile.png";                           // Definimos variable donde almacenamos la imagen del mapa, que esta en la misma carpeta   

var fondo = new Image();                        // tenemos que crear un objeto nuevo e insertarla al canvas , definicion completas de un objeto
fondo.src = mapa;                               // al agregar el src se dispara un evento de carga   
fondo.addEventListener("load", dibujar);        // Agregamos el evento listener el cual nos permitira en el evento de carga subir la imagen (dibujar la imagen)

var vaca = new Image();                         // Agregamos la imagen con el objeto Image   
vaca.src = "vaca.png";                  
vaca.addEventListener("load" , dibujarVacas);   // Agregamos el evento listener el cual nos permitira en el evento de carga subir la imagen (dibujar la imagen)

var pollo = new Image(); 
pollo.src = "pollo.png";
pollo.addEventListener("load" , dibujarPollos);
 
var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load" , dibujarCerdos);

function dibujar()                               //Definimos la funcion que traera la imagen y la pondra en el canvas
{
    papel.drawImage(fondo, 0, 0)                 //Donde papel es el canvas y traemos una funcion de Image que trae la foto de 500x500 y 0,0 donde inicia   

}

function dibujarVacas()                               //Definimos la funcion que traera la imagen y la pondra en el canvas
{
    papel.drawImage(vaca, 10, 10)                 //Donde papel es el canvas y traemos una funcion de Image que trae la foto de 500x500 y 0,0 donde inicia   

}
function dibujarCerdos()                               //Definimos la funcion que traera la imagen y la pondra en el canvas
{
    papel.drawImage(cerdo, 10, 300)                 //Donde papel es el canvas y traemos una funcion de Image que trae la foto de 500x500 y 0,0 donde inicia   

}
function dibujarPollos()                               //Definimos la funcion que traera la imagen y la pondra en el canvas
{
    papel.drawImage(pollo, 300, 150)                 //Donde papel es el canvas y traemos una funcion de Image que trae la foto de 500x500 y 0,0 donde inicia   

}

var z = aleatorio (10, 20);
document.write(z);


function aleatorio(min,maxi)
{
    var resultado;
    resultado = Math.floor(Math.random()* (maxi - min + 1)) + min;
    return resultado;

} 