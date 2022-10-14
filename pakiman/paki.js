var imagenes = [];                      //Definimos un Array, y en cada espacio como pueden ir numeros tambien strings.
imagenes ["Cauchin"] = "vaca.png";        //Asignamos al nombre una imagen
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";

//Crearemos una coleccion de pakimanes en cada posición del Array sin definir las variables
var coleccion = [];                                     //Definimos el array.
coleccion.push(new Pakiman("Tocinauro", 120, 40));      //Invocamos la clase sin necesidad de una variable, 
coleccion.push(new Pakiman("Pokacho", 80, 50));         //directamente la isntanciamos y queda en cada sub[] del array
coleccion.push(new Pakiman("Cauchin", 100, 30));


for (var pakitos of coleccion)    //Of es un Ciclo que permite recorrer por la cantidad de objetos que esta dentro del array y lo colocara en la variable (Muestra la instancia de la clase)
{                               

    pakitos.mostrar();              // Esto Iterara las veces que existe el objeto dentro del array y ejecutara cada objeto y su función:
    console.log(pakitos)            // nos muestra en la consola directamente la instancia del objeto
}