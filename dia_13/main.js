// =======================================================
// BUCLE FOR (EJERCICIOS 1 - 15)
// =======================================================

/* 1. Muestra ls números dl 1 al 10 usando un bucle for. */// Rspst AQUÍ 👇
/*
console.log("Número dl 1 al 10:");
for (let i=1; i <= 10; i++) { console.log( i ); }
*/

/* 2. Muestra ls números dl 10 al 1 n orden descendente usando un bucle for. */// Rspst AQUÍ 👇
/*
console.log("Número dl 1 al 10 en orden descendente:");
for (let i=10; i >= 1 ; i--) { console.log( i ); }
*/

/* 3. Muestra solo ls números pares dl 1 al 20 usando un bucle for. */// Rspst AQUÍ 👇
/*
console.log("Números pares dl 1 al 20:");
for (let i=1; i <= 20; i++) { if( i % 2 === 0 ) { console.log( i ); }    }
*/

/* 4. Muestra solo ls números impares dl 1 al 20 usando un bucle for. */// Rspst AQUÍ 👇
/*
console.log("Números impares dl 1 al 20:");
for (let i=1; i <= 20; i++) { if( i % 2 != 0 ) { console.log( i ); }    }
*/

/* 5. Muestra la tabla d multiplicar dl 5 (dl 1 al 10). */// Rspst AQUÍ 👇
/*
console.log("Tabla de multiplicar del 5, dl 1 al 10:");
for (let i=1; i <= 10; i++) { console.log( "5 x " + i ); }
*/

/* 6. Calcula la suma d ls números dl 1 al 100 usando un bucle for. */// Rspst AQUÍ 👇
/*
console.log("Suma de los número del 1 al 100:");
let sm = 0;
for (let i=1; i <= 100; i++) { sm += i; }
console.log( "La suma de los números del 1 al 100 es: ", sm );
*/

/* 7. Muestra ls múltiplos d 3 ntr 1 y 30 usando un bucle for. */// Rspst AQUÍ 👇
/*
console.log("Múltiplos de 3 del 1 al 30:");
for (let i=3; i <= 30; i+=3) { console.log( i ); }
*/

/* 8. Calcula el factorial d un número (por ejemplo 5) usando for.   */// Rspst AQUÍ 👇
//let n = 5; //parseInt(prompt("Introduzca un número para calcular su factorial:"));
//if( n >= 3 && n <= 20 ) {
/*
   console.log("Calculando el factoria del un número.");   
   let n = 7;

   for (let i=n-1; i >= 2 ; i--) { 
      
      console.log( n, " x " , i , " = " , (n = n * i) ); 
   }
*/
//}


/* 9. Muestra ls primeros 10 números cuadrados (1², 2², 3²…).*/// Rspst AQUÍ 👇
/*
console.log("Cuadrados del 1 al 10:");
for (let i=1; i <= 10; i++ ) { console.log( i , " al cuadrado es: ", i**2 ); }
*/

/* 10. Muestra ls números dl 1 al 50 y muestra "Múltiplo d 10" cnd corresponda. */// Rspst AQUÍ 👇
/*
console.log("Múltiplos de 10 en los números del 1 al 50:");
for (let i=10; i <= 50; i+=10 ) { console.log( i ); }
*/

/* 11. Calcula la suma d ls números pares ntr 1 y 50. */// Rspst AQUÍ 👇
/*
console.log("Suma de números pares del 1 al 50:");
let smPares = 0;
for (let i=2; i <= 50; i+=2 ) { 
   console.log( i ); 
   smPares += i; 
}
console.log("La suma de los números pares del 1 al 50 es: ", smPares);
*/

/* 12. Calcula la suma d ls números impares ntr 1 y 50. */// Rspst AQUÍ 👇
/*
console.log("Suma de número impares del 1 al 50:");
let smImPares = 0;
for (let i=1; i <= 50; i+=2 ) { 
   console.log( i ); 
   smImPares += i; 
}
console.log("La suma de los números pares del 1 al 50 es: ", smImPares);
*/

/* 13. Muestra ls números dl 1 al 20 e indica si cada uno s "par" o "impar".*/// Rspst AQUÍ 👇
/*
console.log("Identificando PARES e IMPARES del 1 al 20:");
let par = 0;
for (let i=1; i <= 20; i++ ) { 
   par = i % 2 ;
   if( par === 0 ) console.log( "El ", i , " es PAR. " );
   else console.log( "El ", i , " es IMPAR. " ); 
}
*/


/* 14. Muestra ls números dl 1 al 30 e indica si son múltiplos d 3. */// Rspst AQUÍ 👇
/*
let multiplo_3 = 0;
for (let i=1; i <= 30; i++ ) { 
   multiplo_3 = i % 3 ;
   if( multiplo_3 === 0 ) console.log( "El ", i , " es múltiplo de 3. " );
   else console.log( "", i , "" ); 
}
*/


/* 15. Muestra un conteo regresivo desde 20 hasta 0. */ // Rspst AQUÍ 👇
/*
for (let i=20; i >= 0; i-- ) { 
   console.log( "", i , "" );
}
*/

// =======================================================
// BUCLE WHILE (EJERCICIOS 16 - 25)
// =======================================================

/* 16. Muestra ls números dl 1 al 10 usando un bucle while. */// Rspst AQUÍ 👇
/*
let n = 0;
while ( n < 10 ) {
   n++;
   console.log(n);      
}
*/

/* 17. Muestra ls números pares dl 2 al 20 usando while. */// Rspst AQUÍ 👇
/*
let n = 0;
while ( n < 20 ) {
   n+=2;
   console.log(n);      
}
*/

/* 18. Muestra ls números dl 10 al 1 usando while. */// Rspst AQUÍ 👇
/*
let n = 0;
while ( n < 10 ) {
   n++;
   console.log(n);      
}
*/


/* 19. Muestra ls números dl 1 al 30, pero solo ls múltiplos d 5. */// Rspst AQUÍ 👇
/*
let n = 0;
while ( n < 30 ) {
   n+=5;
   console.log(n);      
}
*/


/* 20. Calcula la suma d ls números dl 1 al 20 usando while. */// Rspst AQUÍ 👇
/*
let n = 0;
let sm = 0;
while ( n < 20 ) {
   n++;
   sm += n ;
   //console.log(n , " " , sm);
}
console.log("La sumatoria de los números del 1 al 20 es: ",sm);      
*/

/* 21. Muestra ls números dl 1 al 15 e indica si son pares o impares usando while. */// Rspst AQUÍ 👇
/*
let n = 0;
let par = 0;
while ( n < 15 ) {
   n++;
   par = n % 2 ;
   if ( par === 0 ) console.log("El ", n , " es PAR." );
   else console.log("El ", n , " es IMPAR." );
}
*/

/* 22. Muestra la tabla d multiplicar dl número 7 usando while. */// Rspst AQUÍ 👇
/*
let n = 0;
while ( n < 10 ) {
   n++;
   console.log("7 x ", n , " = ", 7 * n );
}
*/


/* 23. Muestra ls múltiplos d 4 ntr 1 y 40 usando while. */// Rspst AQUÍ 👇
/*
let n = 0;
while ( n < 40 ) {
   n+=4;
   console.log( n );
}
*/



/* 24. Calcula el factorial d un número (por ejemplo 6) usando while. */// Rspst AQUÍ 👇
/*   
console.log("Calculando el factoria del número 6 .");   
let f = 6;
let i = f;
  while (i > 1) { 
    i--;
    f *= i;
    console.log(f);
  }
*/  


/* 25. Muestra un conteo regresivo desde 15 hasta 0 usando while. */// Rspst AQUÍ 👇
/*
let i = 16;
while (i > 1) {     i--;
   console.log(i);
}

*/
// =======================================================
// BUCLE DO...WHILE (EJERCICIOS 26 - 30)
// =======================================================

/*26. Muestra ls números dl 1 al 10 usando do...while.*/// Rspst AQUÍ 👇
/*
let n = 1;
do {
   console.log(n);
   n++;
} while ( n <= 10 );
*/

/*27. Pide un número y muestra su tabla d multiplicar usando do...while.*/// Rspst AQUÍ 👇
/*
let num = 5;
let n = 1;
do {
   console.log(num , " x " , n , " = " , num * n );
   n++;
} while ( n <= 10 );
*/


/*28. Muestra ls números dl 10 al 1 usando do...while.*/// Rspst AQUÍ 👇
/*
let n = 10;
do {
   console.log( n );
   n--;
} while ( n >= 1 );
*/


/*29. Muestra ls números dl 1 al 30 y muestra un mensaje cnd sea múltiplo d 6.*/// Rspst AQUÍ 👇
/*
let n = 1;
do {
   if( (n % 6) === 0 ) console.log( n , " es múltiplo de 6." );
   else console.log(n);
   n++;
} while ( n <= 30 );
*/

/*30. Calcula la suma d ls números dl 1 al 50 usando do...while.*/// Rspst AQUÍ 👇
/*
let n = 1;
let sm = 0;
do {
   sm += n ;
   console.log(n);
   n++;
} while ( n <= 50 );
 console.log("La suma de los números del 1 al 50 es: ", sm );
*/


// =======================================================
// COMBINACIÓN d TEMAS (EJERCICIOS 31 - 40)
// =======================================================

/* 31. Pide un número y muestra todos ls números desde 1 hasta ese número.
   Si s múltiplo d 3, muestra "Fizz", si s múltiplo d 5, muestra "Buzz". */
// Rspst AQUÍ 👇

/* 32. Pide al usuario un número y calcula su factorial usando un bucle. */
// Rspst AQUÍ 👇

/* 33. Pide nombre d usuario y contraseña.
   Si usuario s "Kevin" o "Belen" y contraseña s "1234",
   muestra "Acceso autorizado", d lo contrario "Denegado". */
// Rspst AQUÍ 👇

/* 34. Pide un número y muestra todos ls pares hasta ese número.
   Luego muestra la cantidad total d pares encontrados. */
// Rspst AQUÍ 👇

/* 35. Calcula la suma d todos ls múltiplos d 3 y 5 ntr 1 y 100. */
// Rspst AQUÍ 👇

/* 36. Pide un número y muestra si s primo o no, usando un bucle pr verificar divisores. */
// Rspst AQUÍ 👇

/* 37. Simula un inicio d sesión:
   Tienes 3 intentos pr ingresar correctamente usuario="admin" y contraseña="1234".
   Si falla ls 3 intentos, muestra "Acceso bloqueado". */
// Rspst AQUÍ 👇

/* 38. Pide 5 números y calcula su suma total y promedio. */
// Rspst AQUÍ 👇

/* 39. Muestra ls números dl 1 al 50.
   Si el número s divisible por 3 muestra "Fizz",
   si s divisible por 5 muestra "Buzz",
   si s divisible por ambos muestra "FizzBuzz". */
// Rspst AQUÍ 👇

/* 40. Juego d adivinar número:
   Genera un número aleatorio ntr 1 y 10.
   Usa un bucle pr pedir al usuario que adivine.
   Da pistas si el número s mayor o menor.
   El juego termina cnd adivina. */
// Rspst AQUÍ 👇
