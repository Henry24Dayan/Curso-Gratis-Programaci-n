var numeros = 100;                              //Variable límite de números.
var divisible = false;                          //Inicia en false;                       

for ( var i = 1; i <=numeros; i++){             //Ciclo For como vemos pomos que sea menor o igual a la variable números    
                          
    if (esDivisible(i,3)){                           //MÓDULO - Sirve para saber el residuo de una división, tambien sirve para saber pares e impares por emdio del residuo de la divion.

        document.write("Fizz");               //Si es multiplo de 3 escribira   
       
    } 
     if(esDivisible(i,5)){                     // si -->          
        document.write("Buzz");               //Si es multiplo de 5 escribira     
    }  
     if(!esDivisible(i,3) && !esDivisible(i,5))        //Usando multiples operadores, (Si el modulo de es diferente(!) a 0 y el modulo de 5 es diferente a 0 se ejecutara) , Funciona como una Tabla de verdad
     {                              //Sino escribira i
        
        document.write(i);                   

     }
    document.write( "<br/> ");              //Ponemos este document dentro del ciclo antes de iterar el ciclo pero despues de las condiciones y asi la comparten ambas. Para que ejecute el salto de linea,  Concatenamos etiqueta html br para salto de linea sencillo.
    
    function esDivisible (num, divisor){        //Creamos una funcion donde si es Divisible retorna verddero y si no falso.

        if(num % divisor == 0){

                return true;
        
        }  else{
            return false;
        }    



    }

    
}