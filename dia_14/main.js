// R E P A S O     d    B U C L E S ( C I C L O S ) .
/*
let user = "";
let contrasena = "";

do {
   user = prompt("Introduzca su usuario:");

   contrasena = prompt("Introduzca su contraseña:");

} while ( user.toLowerCase() != "admin" || contrasena != "123456n" );
console.log("Acceso Concedido.");
*/


/* Si el cliente coloca  n = 6, deberá mostrar n consola 6 pares , si n = 10 e' 10 pares, .../*
let serie = 2 ;
let n = parseInt(prompt("Cantidad d términos d la serie q desea ver:"));
for(let i = 1; i <= n ; i++ ) {
   console.log(serie);
   serie += 2;
}
*/



/* Hcr un muultiplicar d 2 nmrs pero sin usar el símbolo ( * ) */
/*
let n1 = parseInt(prompt("Ingrese el número 1:"));
let n2 = parseInt(prompt("Ingrese el número 2:"));
let resultado = 0 ;
for ( let i = 1 ; i <= n2 ; i++ ) {
   resultado +=  n1;
}
   console.log(resultado);
   
*/




/* 
let cadena = "anita lava la tina"
let cadena_Sin_espacios = "";
let ii = 0 ;

for (let i = 0 ; i < cadena.length; i++ ) {
   if( cadena[i] != ' ' ) {
      cadena_Sin_espacios += cadena[i];
      ii++;
   }
}
console.log(cadena_Sin_espacios);

*/



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ej Hchos p el Profe drnt cls d la    M ñ n    y al Últm stán ls    E j r c c s   pr   P U N T O    E XT R A  .


/* -----------------WHILE------------------ */
/* 
    while(CONDICION){
    TODO EL CODIGO Q SE EJECUTARA 
    DENTRO DEL BUCLE
    }
*/
/* 
let n = 0;
while (n < 5) {
  console.log("hola hermano Jaime");
  console.log("hola hermano Gerardo");
  n++;
} */

//CREAR UNA APLICACION Q PERMITA INGRESAR TODA LA CANTIDAD d NUMEROS Q GUSTE EL CLIENTE HASTA Q SE INGRESE EL 0

/* let x = 1;

while (x !== 0) {
  x = parseInt(
    prompt(`ingresa cualquier numero pr mostrarlo Ejn consola+
            ingresa 0 pr salir d la consulta`)
  );
  console.log("el numero ingresado x el cliente es: " + x);
}
 */
/* -----------------DO-WHILE------------------ */
/* 
    do{
    TODO EL CODIGO Q SE EJECUTARA 
    DENTRO DEL BUCLE pero ingresa almenos 1 vez
    }while(Condicion)
*/

/* let n = 6;

do {
  console.log("entrando al bucle");
} while (n < 5);
 */
/*
crear una aplicacion q pida el nombre d usuario y 
la contraseña a una persona si esta contraseña o nombre d usuario son incorrectos 
volver a pedir q ingrese sus datos hasta q estos sean correctos
username == "ADMIN"
password == 123456n
*/
/* ------------------FOR----------------------------- */

/* for (let contador = 1; contador <= 7; contador++) {
  console.log("hola mundo");
} */

/* 
    crear una aplicacion q muestre los n terminos d la serie d los numeros
    pares Ej
    si el cliente coloca n = 6
    deberan mostrar Ejn consola  2,4,6,8,10,12
    n=3
    2,4,6
    n=7
    2,4,6,8,10,12,14
*/

/* let serie = 2;
let n = parseInt(
  prompt("ingresa la cantidad d terminos d la serie q deseas ver")
);

for (let i = 1; i <= n; i++) {
  console.log(serie);
  serie += 2;
} */
/* 
    crear un multiplicador d 2 numeros sin utilizar el simbolo *
    4*5 = 4+4+4+4+4 =20
    4*5 = 5+5+5+5 =20
*/

/*
let n1 = parseInt(prompt("ingresa EL PRIMER NUMERO"));
let n2 = parseInt(prompt("ingresa EL SEGUNDO NUMERO"));
let resultado = 0;

for (let i = 1; i <= n2; i++) {
  resultado += n1;
}
console.log(resultado);
*/


/* 
    crear el factorial d un numero y dar el resultado utilizando el bucle for
    Ej 5!= 1*2*3*4*5 = 120
    3!=1*2*3 = 6
    0!=1
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* ------ E J E R C I C I O S     P R U E B A S     T É C N I C A  S pr Punto Extra ----------------- */
/*
1. Serie d    F i b o n a c c i .
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
        console.log( nmr , "es un NÚMERO PERFECTO");
    } else { console.log( nmr , "NO es un NÚMERO PERFECTO"); }
    

} else {
    console.log("Dato NO válido. para verificar si un número es perfecto, capture un número >= 2 .");
}
 */



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ej Hchos p el Profe drnt cls d la   T r d   y al último stán ls    E j r c c s   pr   Práctica Calificada 7 dl dd 14 .

/* --------------S T R I N G S    C A S O   E S P E C I A L --------------- */
/* let nombre = "KEVIN";
for (let i = 0; i < nombre.length; i++) {
  console.log(nombre[i]);
  if (nombre[i] === "A" || nombre[i] === "a") {
    console.log("la vocal A esta presente Ejn este string");
  }
} */
/* ------------ F U N C I O N E S------------------------ */

/* 
//declarar una fnc´ q no recibe ni retorna nada
function saludar() {
  //todo el codigo q se ejecutara dentro d la caja magica
  console.log("Hola amigos d funval");
}
//llamar la fnc´
saludar();

//fncns q reciben parametros pero no retornan nada
function saludarEstudiante(nombre, edad) {
  console.log("hola amigo " + nombre + " d edad: " + edad);
}
let nombreEstudiante = "juan";
let años = 28;
//llamar la fnc´
saludarEstudiante(nombreEstudiante, años);
saludarEstudiante("Moises", 18);
saludarEstudiante(24, "Jaime");

//fncns q reciben parametros y retornan un valor
function sumarNumeros(a, b, c) {
  let resultado = 0;
  resultado = a + b + c;
  return resultado;
}
//llamar la fnc´
console.log(sumarNumeros(14, 30, 70));

//fnc´ q no recibe nada pero retorna un valor
function devolverSaludo() {
  return "chau amigo";
}
//llamar la fnc´
console.log(devolverSaludo());


// ----------------------------------------------- 


let palabra = prompt(
  "ingresa la palabra que verificaremos como palindroma o no"
);
//llamando la fnc´
let palabraNueva = sinespacio(palabra);
palabraNueva = palabraNueva.toLocaleLowerCase();
let copia = darVuelta(palabraNueva);
console.log(copia);
if (copia === palabraNueva) {
  console.log("la palabra es palindroma");
} else {
  console.log("la palabra no es palindroma");
}

//crear una fnc´ q reciba un string y me retorne el mismo string sin espacios vacios
function sinespacio(texto) {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      resultado = resultado + texto[i];
    }
  }
  return resultado;
}
//crar una fnc´ q reciba un string y retorne otro string pero al reves
function darVuelta(texto) {
  let respuesta = "";
  for (let index = texto.length - 1; index >= 0; index--) {
    respuesta = respuesta + texto[index];
  }
  return respuesta;
}
 */