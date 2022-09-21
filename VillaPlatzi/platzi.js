var vp = document.getElementById("villaplatzi"); // Definimos variable para traer el canvas del html
var papel = vp.getContext("2d");                 // Le damos el contexto 2d en este caso   


var fondo = {                                   // Objeto literal

    url: "tile.png",                            // Direccion  del directorio de la imagen
    cargaOK: false                              // Check

};


var vaca = {

    url: "vaca.png",                            //Direccion  del directorio de la imagen
    cargaOK: false                              

};

 var pollo = {

    url: "pollo.png",                            //Direccion  del directorio de la imagen
    cargaOK: false                              

};
var cerdo = {

    url: "cerdo.png",                            //Direccion  del directorio de la imagen
    cargaOK: false                              

};

fondo.imagen = new Image();                         // Agregamos atributo o variable  al OBJETO LITERAL y le almacenamos la clase Image a ese variable (imagen)
fondo.imagen.src = fondo.url;                               // al agregar el src se dispara un evento de carga   
fondo.imagen.addEventListener("load", cargarFondo);        // Esta funcion nos permitira definir cuando esta lista la carga y llamamos a la funcion de carga

vaca.imagen = new Image();                          // Agregamos atributo o variable  al OBJETO LITERAL y le almacenamos la clase Image a ese variable (imagen)
vaca.imagen.src = vaca.url;                         // Definimos ruta usando una instancia del objeto imagen = Image
vaca.imagen.addEventListener("load" , cargarVacas); // Esta funcion nos permitira definir cuando esta lista la carga y llamamos a la funcion de carga

pollo.imagen = new Image();                          // Agregamos atributo o variable  al OBJETO LITERAL y le almacenamos la clase Image a ese variable (imagen)
pollo.imagen.src = pollo.url;                         // Definimos ruta usando una instancia del objeto imagen = Image
pollo.imagen.addEventListener("load" , cargarPollos); // Esta funcion nos permitira definir cuando esta lista la carga y llamamos a la funcion de carga

cerdo.imagen = new Image();                          // Agregamos atributo o variable  al OBJETO LITERAL y le almacenamos la clase Image a ese variable (imagen)
cerdo.imagen.src = cerdo.url;                         // Definimos ruta usando una instancia del objeto imagen = Image
cerdo.imagen.addEventListener("load" , cargarCerdos); // Esta funcion nos permitira definir cuando esta lista la carga y llamamos a la funcion de carga

function cargarFondo()          
{
    fondo.cargaOK = true;  //creamos la señal que el fondo est'a Ok. - Solo se dibujara cuando est'a cargado.
    dibujar();
} 

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar()                               //Definimos la funcion que traera la imagen y la pondra en el canvas
{
    if(fondo.cargaOK == true)
    {
        papel.drawImage(fondo.imagen, 0, 0)                 //Donde usamos una funcion donde el parametro es el objeto completo de imagen y la posicvion en x y y del canvas    

    } 
    if(vaca.cargaOK == true)
    {
        for( var v=0; v<3; v++)                                   //Super poder for para dibujar mas vacas.
        
        {
            var x = aleatorio(0, 6);                           //Definimos variable para ejecutar la funcion aleatorio y le mandamos los parametros o rangos.
            var y = aleatorio(0, 6);
            x = x * 60;                                        //Hacemos la ecuacion para que no se mezclen las vacas: 500(canvas) / 80(pixeles imagenes) nos da 6 entonces definimos un numero aleatorio entre 0 y 6 o un numero cercano para multiplicarlo por 80 y asi que se ordenen.   
            y = y * 60;
            papel.drawImage(vaca.imagen, x, y)                 //Donde papel es el canvas y traemos una funcion de Image que trae la foto de 500x500 y 0,0 donde inicia      
        }
        
    }
    if(pollo.cargaOK == true)
    {
        for( var p=0; p<1; p++)                                   //Super poder for para dibujar mas vacas.
        
        {
            var x = aleatorio(0, 6);                           //Definimos variable para ejecutar la funcion aleatorio y le mandamos los parametros o rangos.
            var y = aleatorio(0, 6);
            x = x * 60;                                        //Hacemos la ecuacion para que no se mezclen las vacas: 500(canvas) / 80(pixeles imagenes) nos da 6 entonces definimos un numero aleatorio entre 0 y 6 o un numero cercano para multiplicarlo por 80 y asi que se ordenen.   
            y = y * 60;
            papel.drawImage(pollo.imagen, x, y)                 //Donde papel es el canvas y traemos una funcion de Image que trae la foto de 500x500 y 0,0 donde inicia      
        }
        
    }
    if(cerdo.cargaOK)                                              // Si es falso no se ejecuta al if solo le importa lo que recibe
    {
        for( var c=0; c<5; c++)                                   //Super poder for para dibujar mas vacas.
        
        {
            var x = aleatorio(0, 6);                           //Definimos variable para ejecutar la funcion aleatorio y le mandamos los parametros o rangos.
            var y = aleatorio(0, 6);
            x = x * 60;                                        //Hacemos la ecuacion para que no se mezclen las vacas: 500(canvas) / 80(pixeles imagenes) nos da 6 entonces definimos un numero aleatorio entre 0 y 6 o un numero cercano para multiplicarlo por 80 y asi que se ordenen.   
            y = y * 60;
            papel.drawImage(cerdo.imagen, x, y)                 //Donde papel es el canvas y traemos una funcion de Image que trae la foto de 500x500 y 0,0 donde inicia      
        }
        
    }

    
}


var z = aleatorio (10, 20);
document.write(z);


function aleatorio(min,maxi)
{
    var resultado;
    resultado = Math.floor(Math.random()* (maxi - min + 1)) + min;
    return resultado;

} 