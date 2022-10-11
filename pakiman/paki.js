var imagenes = [];                      //Definimos un Array, y en cada espacio como pueden ir numeros tambien strings.
imagenes ["Cauchin"] = "vaca.png";        //Asignamos al nombre una imagen
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";

var cauchin = new Pakiman("Cauchin", 100, 30);              //Objeto que vienen de la misma instancia(Clase)
var Pokacho = new Pakiman("Pokacho", 80, 50);               //Objeto que vienen de la misma instancia(Clase)
var tocinauro = new Pakiman("Tocinauro", 120, 40);               //Objeto que vienen de la misma instancia(Clase)

console.log(cauchin,Pokacho,tocinauro);                     //Podemos pasar varios parametros.




Pokacho.mostrar();                                          //Llamamos la función mostrar para cada clase.
tocinauro.mostrar();
cauchin.mostrar();
