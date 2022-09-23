var numeros = 100;                              //Variable límite de números.
                       

for ( var i = 1; i <=numeros; i++){             //Ciclo For como vemos pomos que sea menor o igual a la variable números    
                          
    if ( i % 3 == 0){                           //MÓDULO - Sirve para saber el residuo de una división (Cuando el número no es divisible)

        document.write("Fizz");               //Si es multiplo de 3 escribira   
       
    } 
    if( i % 5 == 0){                     // si -->          
        document.write("Buzz");               //Si es multiplo de 5 escribira     
    }  
     if(i % 3 != 0 && i % 5 != 0)        //Usando multiples operadores, (Si el modulo de 3es diferente a 0 y el modulo de 5 es 0 se ejecutara) , Funciona como una Tabla de verdad
     {                              //Sino escribira i
        
        document.write(i);                   

     }
    document.write( "<br/> ");              //Ponemos este document dentro del ciclo antes de iterar el ciclo pero despues de las condiciones y asi la comparten ambas. Para que ejecute el salto de linea,  Concatenamos etiqueta html br para salto de linea sencillo.
    
    
}