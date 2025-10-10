/* ------ E J E R C I C I O S     P R U E B A S     T É C N I C A  S pr Punto Extra ----------------- */
/*
1. Serie d  F i b o n a c c i .
   Pide al usuario un número n y muestra 
   Ej n consola los primeros n números d la serie d Fibonacci.
   Ej si n = 8 → 0 1 1 2 3 5 8 13

   Instrucciones:
   - Usa un bucle (for o while) pr generar la serie.
   - Usa variables pr almacenar los dos números anteriores.
   - Muestra cada número con console.log(). */// RESPUESTA AQUÍ 👇
/* 
const nmr = parseInt(prompt('Introduzca hasta cuántos términos desea desplegar la serie Fibonacci: '));
let nAntrr = 0, nPstrr = 1, prxmTermino;

if( nmr > 0 ) {
    console.log('Serie Fibonacci hasta: ', nmr);

    for (let i = 1; i <= nmr; i++) {
        prxmTermino = nAntrr + nPstrr;
        console.log(nAntrr, " + " , nPstrr , " = " , prxmTermino );
        nAntrr = nPstrr;
        nPstrr = prxmTermino;
    }
} else { console.log("Dato NO válido. Debe ingresar un número > 0."); }

 */



/* 2. Números Primos
   Pide al usuario un número n y muestra todos los números primos desde 1 hasta n.
   Ej si n = 10 → 2, 3, 5, 7

   Instrucciones:
   - Usa bucles anidados pr verificar si un número es primo.
   - Un número primo es divisible solo por 1 y por sí mismo.
   - Usa if pr verificar divisibilidad. */
// RESPUESTA AQUÍ 👇
/* 
let numero = parseInt(prompt("Hasta que número desea desplegar los números primos:"));
let i = 2 ;
let cdn = "";

for(let nmr = 2 ; nmr <= numero ; nmr++ ) {
    i = 2 ;
    cdn = "";
    while ( i < nmr ) {
        if ( nmr % i === 0 ) { cdn = "NO es primo."; break; } else { cdn = " es primo."; }
        i++;
    }
    if( cdn === " es primo." ) console.log("El ", nmr , cdn );
}
*/





/* 3. Suma d Dígitos
   Pide al usuario que ingrese un número y calcula la suma d todos sus dígitos.
   Ej: si el número es 472, la suma es 4 + 7 + 2 = 13.

   Instrucciones:
   - Usa parseInt() pr convertir el número.
   - Usa un bucle (while o do...while) pr separar y sumar los dígitos.
   - Muestra el resultado con console.log().*/// RESPUESTA AQUÍ 👇
/*
let nmr = parseInt(prompt("Introduzca un número de más de un dígito: "));
let n = nmr + "" ;
let digito = 0;
let cdn_sm = "" ;
let sm = 0 ;
for(let i = 0 ; i < n.length ; i++) {
    digito = parseInt(n[i]);
    sm += digito;
}
console.log("Usted capturó la cifra (",nmr,"), y la SUMA de sus DÍGITOS es: ", sm );
*/




/* 4. Invertir un Número
   Pide al usuario un número y muestra su versión invertida.
   Ej: si el número es 1234, la salida debe ser 4321.

   Instrucciones:
   - Usa un bucle (while o for) pr extraer los dígitos.
   - Usa operaciones matemáticas (% y /) pr obtener cada dígito.
   - Construye el número invertido y muéstralo Ejn consola.*/// RESPUESTA AQUÍ 👇
/*
let nmr = parseInt(prompt("Introduzca un número de más de un dígito: "));
let n = nmr + "" ;
let nmr_invrtd = "" ;
let sm = 0 ;
for(let i = n.length - 1 ; i >= 0  ; i--) {
    nmr_invrtd = nmr_invrtd + n[i];
}
console.log("Usted capturó la cifra (",nmr,"), e INVERTIDA es: ", nmr_invrtd );
*/





/* 5. Número Perfecto
   Un número perfecto s aqel q s igual a la suma d sus divisores positivos (excluyéndose a sí mismo).
   Ej: 6 s perfecto porque sus divisores son 1, 2 y 3 → 1 + 2 + 3 = 6

   Pide al usuario un número y determina si es perfecto o no.

   Instrucciones:
   - Usa un bucle for pr sumar los divisores del número.
   - Usa if pr comparar la suma con el número original.
   - Muestra un mensaje indicando si es perfecto o no. */// RESPUESTA AQUÍ 👇

 /* 
let nmr = parseInt(prompt("Ingrese un número para ver si es perfecto:"));
let dvsn = 0.0 ;
let smDvsrsPrps = 0;

if ( nmr >= 2 ) {

    let i = 1 ;
    while ( i < nmr ) {
        dvsn = nmr / i ;
        console.log( nmr ,"/", i ,"=",dvsn.toFixed(2), "y su residuo es:" , nmr % i );
        if ( nmr % i === 0 ) {
            console.log("Residuo iagual a 0, entonces, ",i," es un Divisor Propio.");
            smDvsrsPrps += i;
        }
    i++;
    }
    console.log("La suma de los Divisores Propios s:", smDvsrsPrps );
    if ( smDvsrsPrps === nmr ) {
        console.log( nmr , "SÍ es un NÚMERO PERFECTO");
    } else { console.log( nmr , "NO es un NÚMERO PERFECTO"); }
    

} else {
    console.log("Dato NO válido. para verificar si un número es perfecto, capture un número >= 2 .");
}

 */