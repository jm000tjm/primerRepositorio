//  E j e r c i c i o   1 .
/*
let nota1 = parseInt(prompt(
`Proceda a introducir 4 notas (del 0 al 100).

Para comenzar, introduzca la nota 1:
`));

let nota2 = parseInt(prompt("Introduce la nota 2:"));
let nota3 = parseInt(prompt("Introduce la nota 3:"));
let nota4 = parseInt(prompt("Introduce la nota 4:"));
promedio = ( nota1 + nota2 + nota3 + nota4 ) / 4 ;


if ( (nota1 >= 0 && nota1 <=100 ) && (nota2 >= 0 && nota2 <=100 )  && 
     (nota3 >= 0 && nota3 <=100 ) && (nota4 >= 0 && nota4 <=100 )     ) 
    {
        console.log("Sus notas han sido: ", nota1,", ", nota2,", ", nota3,", ", nota4,".");
        console.log("Su promedio es: ", promedio, "por lo tanto, ha sido: ")
        if (promedio >= 90 && promedio <=100)   { console.log("E X C E L E N T E ."); }      
        if ( promedio >= 75 && promedio <=89 )  { console.log("B U E N O ."); }
        if ( promedio >= 60 && promedio <=74 )  { console.log("R E G U L A R ."); }
        if ( promedio >=  0 && promedio <=59 )  { console.log("I N S U F I C I E N T E ."); }
    }
else { console.log("El promedio NO se procede a calcular porque: "); 
    if (nota1 <= 0 || nota1 >100) { console.log("La Nota 1 ( ", nota1 ," ) está FUERA de RANGO. ");    }
    cdn = nota1+"";    if ( cdn.length == 3 ) { console.log("No introdujo  Nota 1 ");    }
    if (nota2 <= 0 || nota2 >100) { console.log("La Nota 2 ( ", nota2 ," ) está FUERA de RANGO. ");    }
    cdn = nota2+"";    if ( cdn.length == 3 ) { console.log("No introdujo  Nota 2 ");    }
    if (nota3 <= 0 || nota3 >100) { console.log("La Nota 3 ( ", nota3 ," ) está FUERA de RANGO. ");    }
    cdn = nota3+"";    if ( cdn.length == 3 ) { console.log("No introdujo  Nota 3 ");    }
    if (nota4 <= 0 || nota4 >100) { console.log("La Nota 4 ( ", nota4 ," ) está FUERA de RANGO. ");    }
    cdn = nota4+"";    if ( cdn.length == 3 ) { console.log("No introdujo  Nota 4 ");    }
}
*/
/*    
let n ;
let cdn = "" ;
cdn = nota1+"";
console.log("cdn: ",cdn.length)
*/
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//  E j e r c i c i o   2 .
/*
let edad = parseInt(prompt(
`Calculadpra de tarifa de transporte.

¿ Cuál es su edad ?
`));
let estudiante = prompt("¿ Eres estudiante ( si / no ) ?");
let distancia = parseFloat(prompt("Introduce la distancia que recorrerás:"));
let descuento = 0;

if (( edad >= 6 && edad <= 969 ) && ( distancia >= 0.3 && distancia <= 500 ) &&
    ( estudiante.toLowerCase() === "si" ||  estudiante.toLowerCase() === "no") ) {

    console.log("Sus datos son: ",edad," años de edad, ",estudiante," es estudiante y recorrerá ",distancia," km.");

    if ( edad < 18 ) { console.log("Tienes 50 % de descuento por ser Menor de Edad."); 
        descuento += 50 ;   }
    if ( edad > 60 ) { console.log("Tiene el 60 % de descuento por ser Mayor de 60 años."); 
        descuento += 60; }
    if ( estudiante.toLowerCase() === "si" ) { console.log("Tienes 25 % de descuento por ser estudiante."); 
        descuento += 25; }
    if ( distancia > 30 ) { console.log("Tienes 10 % de descuento adiconal por viajar más de 30 km."); descuento += 10; }

    console.log("Usted tiene un DESCUENTO TOTAL de: ",descuento ," %" );

} else { 
    console.log("Usted debe volver capturar los datos porque: ");
    if(!( edad >= 6 && edad <= 969 )) console.log("Ha introducido una Edad de (",edad,") y NO es VÁLIDA.");
    if(!( estudiante.toLowerCase() === "si" ||  estudiante.toLowerCase() === "no" )) console.log("En estudiante usted contestó (",estudiante,") y NO es VÁLIDO. Solo debe ser ( si / no ).");
    if(!( distancia >= 0.3 && distancia <= 500 )) console.log("Ha introducido una Distancia de (",distancia,") y NO es VÁLIDA.");
}
*/

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//  E j e r c i c i o   3 .

let gradosCelsius = 0.0;
let gradosFahrenheit = 0.0;
let m = 0.0;
let km = 0.0; 
let c_C_a_F = 0.0 ;

let opcion = parseInt(prompt(
`Bienvenido a Conversión de unidades.

 Usted podrá convertir unidades de temperatura y distancia.

 Seleccione la opción que desea:

 1. Convertir de Grados Celsius a Grados Fahrenheit.
 2. Convertir de Grados Fahrenheit a Grados Celsius.
 3. Convertir de Metros a Kilómetros.
 4. Convertir de Kilómetros a Metros.
`));

if ( opcion == 1 || opcion == 2 || opcion == 3 || opcion == 4 ) {
    if ( opcion == 1 ) { 
        gradosCelsius = parseFloat(prompt(
        `Convertidor de grados  Celsius  a  Fahrenheit .

        Considere lo siguiente al introducir la temperatura 
        que desea convertir:
        
        La temperatura máxima que se ha logrado medir en el 
        planeta son poco más de 5 billones de grados Celsius, 
        por lo que, para nuestro convertidor, la temperatura 
        máxima que podrá convertir, se ha acotado a máximo 
        5 billones de grados.

        La menor temperatura medible para nuestro sistema 
        es -273.15° Celsius.

        Introduzca los Grados Celsius: `)); 
        if ( gradosCelsius >= -273 && gradosCelsius <= 5000000000000 ) {
            c_C_a_F = ( gradosCelsius * 9 / 5 ) + 32 ;
            console.log(gradosCelsius+"° Celsius, son: ",c_C_a_F+"° Fahrenheit.");
        }
        else {
            console.log("Usted introdujo ( ", gradosCelsius ," ) y es una tempratura fuera del Rango Medible Posible. " );
        }
    }   
    if ( opcion == 2 ) { 
        gradosFahrenheit = parseFloat(prompt(
        `Convertidor de grados  Fahrenheit  a  Celsius .

        Considere lo siguiente al introducir la temperatura 
        que desea convertir:
        
        La temperatura máxima en grados Fahrenheit que se ha 
        podido medir son poco más de 9,000,000,000,032°. Sin
        embargo, en este convertidor la temperatura máxima
        que podrá convertir se ha acotado a 5 billones de 
        grados Fahrenheit.

        La menor temperatura medible para nuestro sistema 
        es -459.67° Fahrenheit.

        Introduzca los Grados Celsius: `)); 
        if ( gradosFahrenheit >= -459.67 && gradosFahrenheit <= 5000000000000 ) {
            c_F_a_C =  ( gradosFahrenheit - 32 ) * 5/9 ;
            console.log(gradosFahrenheit + "° Fahrenheit, son: ", c_F_a_C + "° Celsius.");
        } else {
            console.log("Usted introdujo ( ", gradosFahrenheit ," ) y es una tempratura fuera del Rango Medible Posible. " );
        }
    }

    if ( opcion == 3 ) { 
        m = parseFloat(prompt(
        `Convertidor de   M E T R O S   a  KILÓMETROS .

        Considere lo siguiente al introducir los metros 
        que desea convertir:
        
        El rango permitido para este convertidor va de 
        0 metros a 5 billones de metros.

        Introduzca los M E T R O S: `)); 
        if ( m >= 0 && m <= 5000000000000 ) {
            console.log(m + " m ,  son:  ", m/1000 , " km.");
        } else {
            console.log("Usted introdujo ( ", m ," ) y es un valor fuera de rango. " );
        }    
    }

    if ( opcion == 4 ) { 
            km = parseFloat(prompt(
        `Convertidor de   K I L Ó M E T R O S   a  METROS .

        Considere lo siguiente al introducir los 
        kilmetros que desea convertir:
        
        El rango permitido para este convertidor va de 
        0 metros a 5 billones de metros.

        Introduzca los K I L Ó M E T R O S: `)); 
        if ( km >= 0 && m <= 5000000000000 ) {
            console.log( km + " km ,  son: ", km*1000 , " m.");
        } else {
            console.log("Usted introdujo ( ", km ," ) y es un valor fuera de rango. " );
        }
    }
} else { 
    console.log("Usted introdujo ( ", opcion ," ) y NO es una opción válida. " ); 
}