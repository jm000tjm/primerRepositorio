// E j e r c i c i o   1 . Área d triángulos múltiples.

/* 
let altura = 10;
let base = 20;
let area_t = (altura * base) / 2 ;
let veces = 0 ;
 
do {
    veces += 1 ;
    recibirBaseAltura();
    calcularAreaTriangulo();
    desplegarDatos();    
} while ( veces < 3 ) ;

function recibirBaseAltura() {
    altura = parseInt(prompt(`
    Bienvenido al cálculo del área de un triángulo.

    A continuación igrese la altura y
    la base de 3 triángulos para obtener su área.
    
    Ingrese la ALTURA del triángulo ${veces}: 
    `));

    base = parseInt(prompt(`Ingrese la BASE del triángulo ${veces}: `));    
}
function calcularAreaTriangulo() { area_t = base * altura / 2 ; }
function desplegarDatos() {
    console.log("Datos del triángulo",veces,": Base =",base,", Altura =",altura); 
    console.log("Operación del triángulo",veces,":",base,"x",altura,"/ 2 =",area_t);    
    console.log("Á R E A   del   T R I Á N G U L O ",veces,": ",area_t.toFixed(2));
    console.log(" ");    
}

*/



////////////////////////////////////////////////////////////////////////////////////////////////////
// E j e r c i c i o   2 . Convers´d Celsius a Fahrenheit.
/*  
let gradosCelsius = 0.0;
let gradosFahrenheit = 0.0;
let c_C_a_F = 0.0 ;

let veces = 0 ;
 
do {
    veces += 1 ;
    convertirAFahrenheit();
} while ( veces < 5 ) ;


function convertirAFahrenheit() {        
    gradosCelsius = parseFloat(prompt(
        `Bienvenido al Convertidor de grados  Celsius  a  Fahrenheit .

        A continuación introduzca 5 temperaturas en grados Celsius.
        Considere lo siguiente al introducir la temperatura 
        que desea convertir:        
        La temperatura máxima que se ha logrado medir en el 
        planeta son poco más de 5 billones de grados Celsius, 
        por lo que, para nuestro convertidor, la temperatura 
        máxima que podrá convertir, se ha acotado a máximo 
        5 billones de grados.
        La menor temperatura medible para nuestro sistema 
        es -273.15° Celsius.
        Introduzca la temperatura ${veces} Grados Celsius: 
    `)); 
    if ( gradosCelsius >= -273 && gradosCelsius <= 5000000000000 ) {
        c_C_a_F = ( gradosCelsius * 9 / 5 ) + 32 ;
        console.log("Como temperatura ",veces," ingresó: ",gradosCelsius+"°  Celsius.");
        console.log("Convertida son: ",c_C_a_F.toFixed(2) + "°  Fahrenheit.");
        console.log(" ");
    } else {
        console.log("Usted introdujo ( ", gradosCelsius ," ) y es una tempratura fuera del Rango Medible Posible. " );
    }
} 
*/




////////////////////////////////////////////////////////////////////////////////////////////////////
// E j e r c i c i o   3 . Contar vocales n un txt .

/*
let texto = "";
let vocales = "aeiou"
let contar = 0 ;
let veces = 0 ;
 
do {
    veces += 1 ;

    contarVocales();

} while ( veces < 3 ) ;


function contarVocales() {
    contar = 0 ;
    texto = prompt(
        `Bienvenido al Contador de Vocales.

        A continuación introduzca 3 textos.

        Introduzca el texto ${veces} : 
    `);
    console.log("El texto que ingresó es: ", texto );
    console.log("Y, tiene una longitud de: ", texto.length ," caracteres.");
    for (let i = 0; i < texto.length ; i++ ) {
        switch ( texto[i].toLowerCase() ) {
            case "a": case "e":case "i":case "o":case "u": contar ++ ; break;
        }
    }
    console.log("El número de VOCALES en el texto, son:", contar  );
    console.log(" ")
}
*/








////////////////////////////////////////////////////////////////////////////////////////////////////
// E j e r c i c i o   4 . Pares e impares n un rango .

/*
let inicio = 0;
let fin = 0;
do {
    capturaDeRango();

    clasificarParesImpares()

} while ( fin <= inicio );

console.log("El rango que indrodujo va de ",inicio," a ",fin," .")
for (let i = inicio ; i <= fin ; i++ ) {
    if( i % 2 === 0  ) { console.log(i ,"es Par."); }
    else { console.log(i ,"es Impar."); }
}
function capturaDeRango() {
    inicio = parseInt(prompt(
        `Bienvenido al clasificador de números pares e impares en un rango.

        A continuación ingrese el inicio y fin del rango.

        Introduzca el inicio del rango: 
    `));
    fin = parseInt(prompt(
        `Introduzca el fin del rango: 
    `));     
}
function clasificarParesImpares() {
    if ( fin <= inicio ) { 
        alert(`Los datos capturados son incorrectos. 
            Usted capturo: inicio = ${inicio} , fin = ${fin} .
            Considere que: ( inicio ) debe ser menor que ( fin ) .`); 
    }       
}

*/






////////////////////////////////////////////////////////////////////////////////////////////////////
// E j e r c i c i o   5 . Número mayor y suma .

/* 
let cifra = 0;
let mayor = 0;
let sm = 0; 
let veces = 0 ;

 
do {
    veces += 1 ;

    capturaDe5Numeros();
    mayorYSuma();

} while ( veces < 5 ) ;
console.log("La cifra moyor que capturó es: ", mayor);
console.log("La suma de las 5 cifras es: ", sm );

function capturaDe5Numeros() {
    cifra = parseInt(prompt(
        `Bienvenido al programa que:

        Identifica la cifra mayor de cinco capturas.
        Y, suma las cinco cifras.

        Introduzca la cifra ${veces}: 
    `));
}
function mayorYSuma() {
    console.log("Cifra ",veces," = ",cifra," .");
    if ( cifra > mayor ) { mayor = cifra; }
    sm += cifra;
}

*/
