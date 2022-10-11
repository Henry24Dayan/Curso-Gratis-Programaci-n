//Crearemos la Clase y definimos sus caracteristicas
class Pakiman

{
    constructor(n,v,a)                                    //Funcion que se dispara cuando se crea el objeto (Constructor) //Recibe los parametros que le pasamos al crear nuevos objetos de la clase Pakiman
    {
                                // this Define (Variables)caracteristicas dentro de la clase.
         
           this.imagen = new Image();  // Creando clase de tipo Image para usar sus propiedades y metodos y la agregaremos al documento
           this.nombre = n; 
           this.vida = v; 
           this.ataque = a; 
           
           this.imagen.src = imagenes[this.nombre];   //Obtenemos la ubicación de la imagen por medio del array y el nombre ya definido dentro de la clase.

           
    }       

    hablar()              // Definimos una funcion para que dispare un alert con el nombhre
        {
        alert(this.nombre); 
        }
    mostrar()
        {
            document.body.appendChild(this.imagen);                         //appendChild agrega la imagen al body por emdio de la isntancia de Image
            document.write("<p>");                                          //Escribimos los detalles del pakiman, recordar que la estrucvtura es de arbol familiar.    
            document.write("<strong>" + this.nombre + "</strong><br />");
            document.write("Vida: " + this.vida + "<br />");
            document.write("Ataque: " + this.ataque + "<hr /");
            document.write("</p>");    
        }        
     
}
