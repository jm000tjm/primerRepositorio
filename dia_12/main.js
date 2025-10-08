/* dia 12 ; prompt , parseInt , parseFloat, switch ... case ... default */
/*
let mes = parseInt(prompt("Introduzca el número del mes: "));
console.log("ConsoleLog: ", typeof(mes));


if (  mes === 1 ) { console.log("Enero"); }
else if ( mes === 2 ) { console.log("Febrero"); }
else if ( mes === 3 ) { console.log("Marzo"); }
else if ( mes === 4 ) { console.log("Abril"); }
else if ( mes === 5 ) { console.log("Mayo"); }
else if ( mes === 6 ) { console.log("Junio"); }
else if ( mes === 7 ) { console.log("Julio"); }
else if ( mes === 8 ) { console.log("Agosto"); }
else if ( mes === 9 ) { console.log("Septiembre"); }
else if ( mes === 10 ) { console.log("Octubre"); }
else if ( mes === 11 ) { console.log("Noviembre"); }
else if ( mes === 12 ) { console.log("Diciembre"); }
else { console.log("El número NO es válido para MES."); }

*/

console.log("esta funcionando");
/* -----------IF----------------- */
/*  if(CONDICION){
    TODO EL CODIGO Q SE EJECUTARA
    SI LA CONDICION ES VERDADERA
    }  */
/*
if (5 > 4) {  console.log("5 siempre va ser mayor a 4");    }
*/
/* -------------IF-ELSE------------- */
/*  if(CONDICION){
    TODO EL CODIGO Q SE EJECUTARA
    SI LA CONDICION ES VERDADERA
    }ELSE{
    TODO EL CODIGO Q SE EJECUTARA
    SI LA CONDICION ES FALSA
    }
*/
/*
if ((5 >= 2 && 3 == "3") || 0 < 7) {
  console.log("codigo verdadero");
} else {
  console.log("codigo falso");
}

let condicioncita = null;

if (condicioncita) {
  console.log("kevin");
} else {
  console.log("andres");
}
*/
/* ---------------IF-ELSE-IF------------ */
/*  if(CONDICION){
    TODO EL CODIGO Q SE EJECUTARA
    SI LA CONDICION ES VERDADERA
    }ELSE IF (CONDICION2){
        TODO EL CODIGO Q SE EJECUTARA
        SI LA CONDICION1 ES FALSA
        Y LA CONDICION2 ES VERDADERA
    }
*/
/*
if (1 > 5) {
  console.log("condicion 1 verdadero");
} else if (2 > 3) {
  console.log("condicion 1 falso pero condicion 2 verdadero");
} else if (5 > 2) {
  console.log("condicion 2 falsa pero condicion 3 verdadera");
}
*/
/* evalular si el clima dl dia si el clima stá ntr  0-10 hace frio si stá entre 11 y 24 hc buen clima
    y si es mayor a 25 hace calor   */
/*    
let clima = 32;
if (clima >= 0 && clima <= 10) {
  console.log("hace frio");
} else if (clima > 10 && clima <= 24) {
  console.log("hace buen clima");
} else if (clima >= 25) {
  console.log("hace calor");
} else {
  console.log("clima fuera de los parametros");
}
*/
/*  crear una aplicacion q nos permita determinar q mes estamos del año el cliente debera ingresar
    el mes en un formato numerico 1-12  si coloca x ejemplo 2 el resultado deberia ser febrero
    si coloca 6  deberia ser junio y asi */
/* let mes = parseInt(prompt("ingresa un mes en formato numerico"));
console.log(mes);
console.log(typeof mes);
if (mes === 1) {
  console.log("enero");
} else if (mes === 2) {
  console.log("febrero");
} else if (mes === 3) {
  console.log("marzo");
} else if (mes === 4) {
  console.log("abril");
} else if (mes === 5) {
  console.log("mayo");
} else if (mes === 6) {
  console.log("junio");
} else if (mes === 7) {
  console.log("julio");
} else if (mes === 8) {
  console.log("agosto");
} else if (mes === 9) {
  console.log("septiembre");
} else if (mes === 10) {
  console.log("octubre");
} else if (mes === 11) {
  console.log("noviembre");
} else if (mes === 12) {
  console.log("diciembre");
} else {
  console.log("numero invalido");
} */

/* ----------------PROMPT------------- */

/* let resultadoCliente = prompt("ingresa tu nombre");
console.log(resultadoCliente);
 */

/* ----------------SWICH CASE---------- */
/*

let mesesillo = parseInt(prompt("ingresa el mes de nacimiento"));
switch (mesesillo) {
  case 1:
    console.log("enero");
    break;
  case 2:
    console.log("febrero");
    break;
  case 3:
    console.log("marzo");
    break;
  case 4:
    console.log("abril");
    break;
  case 5:
    console.log("mayo");
    break;
  case 6:
    console.log("junio");
    break;
  case 7:
    console.log("julio");
    break;
  case 8:
    console.log("agosto");
    break;
  case 9:
    console.log("septiembre");
    break;
  case 10:
    console.log("octubre");
    break;
  case 11:
    console.log("noviembre");
    break;
  case 12:
    console.log("diciembre");
    break;
  default:
    console.log("numero incorrecto");
    break;
}

*/

/* ----------------------------------------------------------------------- */
/* ----------------------------------------------------------------------- */
/* ----------------------------------------------------------------------- */
/* ----------------------------------------------------------------------- */
// =======================================================
// IF SIMPLE (EJERCICIOS 1 - 5)
// =======================================================

/* 1. Pide al usuario un número c prompt.   Muestra "Positivo" si el número s mayor q 0.  */
// RESPUESTA AQUÍ 👇

/*
let nmr = parseInt(prompt("Introduce un número:"));
if (nmr > 0 ) { console.log("Positivo");    }
*/


/* 2. Pide la edad dl usuario.   Si la edad s mayor o igual a 18, muestra "Eres mayor d edad".  */
// RESPUESTA AQUÍ 👇
/*
let edd = parseInt(prompt("Introduce tu edad:"));
if (edd >= 18 ) { console.log("Eres mayor de edad.");    }
*/
/* 3. Pide un número y verifica si es par.   Usa el operador % y un if. */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduce un número:"));
let residuo = nmr % 2 ;
if (residuo == 0 ) { console.log("El número es par."); }
*/
/* 4. Pide una contraseña con prompt.   Si la contraseña es "admin123", muestra "Acceso permitido".     */
// RESPUESTA AQUÍ 👇
/*
cntrsn = prompt("Introduce la contraseña:");
if (cntrsn == "admin123") { console.log("Acceso permitido.");  }
*/
/* 5. Pide un número.   Si el número s igual a 100, muestra "Número exacto".    */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduce un número:"));
if (nmr == 100 ) { console.log("Número exacto."); }
*/
// =======================================================
// IF - ELSE (EJERCICIOS 6 - 10)
// =======================================================
/* 6. Pide un número.  Si es mayor que 50 muestra "Número alto", caso contrario "Número bajo".  */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduce un número:"));
if (nmr > 50) { console.log("Número alto");
} else { console.log("Número bajo");    }
*/
/*
7. Pide la edad dl usuario. Si es mayor o igual a 18 muestra "Bienvenido", caso contrario "Acceso denegado".*/
// RESPUESTA AQUÍ 👇
/*
edd = parseInt(prompt("Introduce tu edad:"));
if (edd >= 18 ) { console.log("Bienvenido");    }
else { console.log("Acceso denegado"); }
*/
/* 8. Pide una nota ntr 0 y 100. Si la nota s mayor o igual a 60 muestra "Aprobado", de lo contrario "Reprobado".*/
// RESPUESTA AQUÍ 👇
/*
nota = parseInt(prompt("Introduce la nota:"));
if (nota >= 0 && nota <= 100 ) { 
    if( nota >= 60 ) { console.log("Aprobado");}
    else { console.log("Reprobado"); }
} else { console.log("La nota que introdujo NO es válida."); }
*/
/* 9. Pide un nombre. Si el nombre s "Kevin" muestra "Hola Kevin", d l contrario "Hola invitado". */
// RESPUESTA AQUÍ 👇
/*
nota = parseInt(prompt("Introduce la nota:"));
if (nota >= 0 && nota <= 100 ) { 
    if( nota >= 60 ) { console.log("Aprobado");}
    else { console.log("Reprobado"); }
} else { console.log("La nota que introdujo NO es válida."); }
*/
/* 10. Pide un número y muestra si es par o impar usando if-else. */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduce un número:"));
residuo = nmr % 2 ;
if ( residuo == 0 ) { console.log("El número es P A R."); }
else { console.log("El número es I M P A R."); }
*/
// =======================================================
// IF - ELSE IF (EJERCICIOS 11 - 15)
// =======================================================

/* 11. Pide una nota (0 a 100) e imprime:   - "Excelente" si es mayor o igual a 90
                                            - "Bueno" si está entre 70 y 89
                                            - "Regular" si está entre 50 y 69
                                            - "Insuficiente" si es menor a 50    */
// RESPUESTA AQUÍ 👇
/*
nota = parseInt(prompt("Introduce la nota:"));
if ( nota >= 90 && nota <=100 ) { console.log("Excelente"); }
else if ( nota >= 70 && nota <=89 ) { console.log("Bueno"); }
else if ( nota >= 50 && nota <=69 ) { console.log("Regular"); }
else if ( nota >= 0 && nota < 50 ) { console.log("Insuficiente"); }
else { console.log("La nota que introdujo NO es válida."); }
*/
/* 12. Pide la temperatura (n grados Celsius).
   Muestra:     - "Frío" si s menor a 15
                - "Templado" si stá ntr 15 y 25
                - "Caluroso" si s myr a 25      */
// RESPUESTA AQUÍ 👇
/*
let temperatura = parseInt(prompt("Introduzca la temperatura:"));
if ( temperatura > -90 && temperatura < 15 ) { console.log("Frío"); }
else if ( temperatura >= 15 && temperatura <=25 ) { console.log("Templado"); }
else if ( temperatura > 25 && temperatura < 70  ) { console.log("Caluroso"); }
else { console.log("La temperatura qua ha introducido, nunca se ha registrado en el planeta."); }
*/
/*
13. Pide una hora (0 a 23).   Muestra:
                            - "Buenos días" si está entre 6 y 11
                            - "Buenas tardes" si está entre 12 y 18
                            - "Buenas noches" si está entre 19 y 23
                            - "Durmiendo" si está entre 0 y 5               */
// RESPUESTA AQUÍ 👇
/*
let hora = parseInt(prompt("Introduzca la hora:"));
if ( hora >= 0 && hora <= 5 ) { console.log("Es de madrugada"); }
else if ( hora >= 6 && hora <=11 ) { console.log("Buenos días"); }
else if ( hora >= 12 && hora <=18 ) { console.log("Buenas tardes"); }
else if ( hora >= 19 && hora <= 23 ) { console.log("Buenas noches"); }
else { console.log("La hora que introdujo NO es válida."); }
*/
/* 14. Pide un número del 1 al 3 y muestra un mensaje distinto para cada uno. */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduzca un número del 1 al 3:"));
if ( nmr == 1  ) { console.log("Uno"); }
else if ( nmr == 2 ) { console.log("Dos"); }
else if ( nmr == 3 ) { console.log("Tres"); }
else { console.log("Ese número no se pidió."); }
*/
/*
/* 15. Pide un número y muestra:
   - "Negativo" si es menor que 0
   - "Cero" si es igual a 0
   - "Positivo" si es mayor que 0 */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduzca un número:"));
if ( nmr < 0  ) { console.log("Negativo"); }
else if ( nmr == 0 ) { console.log("Cero"); }
else if ( nmr > 0 ) { console.log("Positivo"); }
*/
// =======================================================
// IF ANIDADO (EJERCICIOS 16 - 20)
// =======================================================
/*
16. Pide una edad.   Si s mayor o igual a 18 muestra "Mayor de edad".
   Dentro dl mismo if, si s mayor o igual a 60 muestra "Adulto mayor".  */
// RESPUESTA AQUÍ 👇
/*
edd = parseInt(prompt("Introduce tu edad:"));
if (edd >= 18 ) { 
    console.log("Mayor de edad");  
    if( edd >= 60 ) { console.log(" y Adulto Mayor"); }
} 
*/
/* 17. Pide una nota.   Si s mayor o igual a 60 muestra "Aprobado".
   Dentro de ese if, si la nota es mayor o igual a 90 muestra "Excelente".  */
// RESPUESTA AQUÍ 👇
/*
nota = parseInt(prompt("Introduce la nota:"));
if ( nota >= 60 && nota <= 100  ) { 
    console.log("Aprovado");  
    if( nota >= 90 && nota <= 100 ) { console.log(" con nota Excelente"); }
} else { console.log("Valor fuera de rango."); }
*/ 
/* 18. Pide un número. Si s positivo, dentro dl if verifica si s par o impar. */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduce un número:"));
residuo = nmr % 2 ;
if(nmr > 0) {
    if (residuo == 0 ) { console.log("El número es P A R."); }
    else { console.log("El número es I M P A R."); }
} else { 
    if( nmr == 0 ) {
        console.log("El número es Cero ( 0 ), por lo tanto, no se procede a verificar si es PAR ó IMPAR."); 
    }
    if( nmr < 0 ) {
        console.log("El número es Negativo, por lo tanto, no se procede a verificar si es PAR ó IMPAR."); 
    }    
}
*/    
/* 19. Pide usuario y contraseña. Si usuario s "admin", dentro dl mismo if verifica si la contraseña s "1234".
   Si ambos coinciden, muestra "Acceso concedido".  */
// RESPUESTA AQUÍ 👇
/*
let usuario = prompt("Usuario:");
cntrsn = prompt("Contraseña:");

if (usuario == "admin") {   
    if (cntrsn == "1234") { console.log("A C C E S O   P E R M I T I D O ."); } 
    else { console.log("Acceso D E N E G A D O , Contraseña incorrecta.");} 
} else { console.log("Acceso D E N E G A D O ."); 
    if (usuario != "admin") console.log("Usuario incorrecto.");
    if (cntrsn != "1234") console.log("Contraseña incorrecta.");
}
*/
/* 20. Pide dos números.   Si el primero s mayor, muestra "El primero es mayor".
   Dentro d ese if, verifica si la diferencia es mayor a 10 y muestra "Diferencia grande".  */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduzca un primer número:"));
let nmr2 = parseInt(prompt("Introduzca un segundo número:"));
let dfrnc = nmr-nmr2;
if ( nmr > nmr2 ) { 
    console.log("El primero es mayor"); 
    if( dfrnc > 10 ) { console.log(" y la Diferencia es Grande"); }
} else { 
    console.log("El primer número NO es mayor, por lo tanto, no se procedió a verificar."); 
}
*/

// =======================================================
// SWITCH CASE (EJERCICIOS 21 - 22)
// =======================================================

/* 21. Pide un número del 1 al 7 y muestra el día correspondiente.
   1 = Lunes, 2 = Martes, ..., 7 = Domingo  */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduzca un número del 1 al 7:"));
if(nmr >= 1 && nmr <=7 ) {
    switch (nmr) {
        case 1: console.log("Lunes");   break;
        case 2: console.log("Martes");break;
        case 3: console.log("Miércoles");break;
        case 4: console.log("Jueves");break;
        case 5: console.log("Viernes");break;
        case 6: console.log("Sábado");break;
        case 7: console.log("Domingo"); break;
    }
} else { console.log("El valor introducido NO es válido para día de la semana."); }    
*/
/* 22. Pide un número del 1 al 12 y muestra el mes correspondiente. */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduzca un número del 1 al 12:"));
if(nmr >= 1 && nmr <=12 ) {
    switch (nmr) {
        case 1: console.log("Enero");   break;
        case 2: console.log("Febrero");break;
        case 3: console.log("Marzo");break;
        case 4: console.log("Abril");break;
        case 5: console.log("Mayo");break;
        case 6: console.log("Junio");break;
        case 7: console.log("Julio"); break;
        case 8: console.log("Agosto");break;
        case 9: console.log("Septiembre");break;
        case 10: console.log("Octubre");break;
        case 11: console.log("Noviembre");break;
        case 12: console.log("Diciembre"); break;        
    }
} else { console.log("El valor introducido NO es válido para mes del año."); }    
*/
// =======================================================
// COMBINACIÓN d TODOS ls TEMAS (EJERCICIOS 23 - 35)
// =======================================================

/* 23. Pide dos números.   Usa if-else para mostrar si su suma es par o impar. */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduzca un primer número:"));
nmr2 = parseInt(prompt("Introduzca un segundo número:"));
let sm = nmr + nmr2 ;
residuo = sm % 2 ;
if ( residuo == 0 ) { console.log("El resultado de la Suma es ",sm," y es P A R."); }
else { console.log("El resultado de la Suma es ",sm," y es I M P A R."); }
*/
/* 24. Pide tres notas, calcula el promedio.   Usa if-else-if pr mostrar:
   - "Excelente" si es mayor a 90
   - "Aprobado" si es mayor o igual a 60
   - "Reprobado" si es menor a 60   */
// RESPUESTA AQUÍ 👇
/*
nota = parseInt(prompt("Introduce la nota:"));
let nota2 = parseInt(prompt("Introduce la nota:"));
let nota3 = parseInt(prompt("Introduce la nota:"));
promedio = ( nota + nota2 + nota3 ) / 3 ;
if ( promedio >= 90 && promedio <=100 ) { console.log("Excelente"); }
else if ( promedio >= 60 && promedio <=89 ) { console.log("Aprobado"); }
else if ( promedio >= 0 && promedio < 60 ) { console.log("Insuficiente"); }
else { console.log("El promedio NO es válido."); }
*/
/* 25. Pide nombre y edad.
   Usa un if anidado para mostrar:
   - "Hola [nombre], eres mayor de edad"
   - Si tiene 60 o más, agrega también "y adulto mayor"     */
// RESPUESTA AQUÍ 👇
/*
let nombre = prompt("Introduce tu nombre:");
edd = parseInt(prompt("Introduce tu edad:"));
if (edd >= 18 ) { 
    console.log("Hola ",nombre," eres Mayor de edad");  
    if( edd >= 60 ) { console.log(" y Adulto Mayor"); }
} 
*/
/* 26. Pide un número dl 1 al 5 y usa switch pr mostrar una calificac´:
   1 = Muy malo, 2 = Malo, 3 = Regular, 4 = Bueno, 5 = Excelente.   */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduzca un número del 1 al 5:"));
if(nmr >= 1 && nmr <=5 ) {
    switch (nmr) {
        case 1: console.log("Muy malo");   break;
        case 2: console.log("Malo");break;
        case 3: console.log("Regular");break;
        case 4: console.log("Bueno");break;
        case 5: console.log("Excelente");break;
    }
} else { console.log("El valor introducido FUERA de RANGO."); }   
*/
/* 27. Pide una letra y determina si es vocal o consonante usando switch. */
// RESPUESTA AQUÍ 👇



let letra = prompt("Introduzca una letra:");

    switch (letra.toLowerCase()) {

        case "a": case "e": case "i": case "o": case "u": 
        console.log("Vocal");   break;

        case "b": case "c": case "d": case "f": case "g": case "h": case "j": case "k": case "l": case "m":
        case "n": case "ñ": case "p": case "q": case "r": case "s": case "t": case "v": case "x": case "y":    
        case "z": console.log("Consonante");   break;

        case "0": case "1": case "2": case "3":  case "4": case "5": case "6": case "7":  case "8": case "1": 
        case "9": console.log("Capturó un Dígito");   break;  

        case ">": case "<": case "=": case "(":  case ")": case ".": case ",": case "{":  case "}": case "+": 
        case "-": case "*": case "_": case "$":  case "%": case "/": case "!": case "#":  case "$": case "&":
        case ".": console.log("Capturó un Carácter Especial");   break;          
    }


/* 28. Pide dos números y una operación ("sumar", "restar", "multiplicar", "dividir").
   Usa switch para realizar la operación correspondiente.   */
// RESPUESTA AQUÍ 👇
/*
nmr = parseInt(prompt("Introduzca un primer número:"));
nmr2 = parseInt(prompt("Introduzca un segundo número:"));
let sm = nmr + nmr2 ;
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
/*
29. Pide edad y país.
   Si el país es "Bolivia" y la edad es mayor o igual a 18, muestra "Puede votar".
   Caso contrario, muestra "No puede votar".
*/
// RESPUESTA AQUÍ 👇

/*
30. Pide tres números.
   Determina cuál es el mayor de los tres usando if-else-if.
*/
// RESPUESTA AQUÍ 👇

/*
31. Pide un número y determina:
   - Si es múltiplo de 3 muestra "Fizz"
   - Si es múltiplo de 5 muestra "Buzz"
   - Si es múltiplo de ambos muestra "FizzBuzz"
*/
// RESPUESTA AQUÍ 👇

/*
32. Pide una nota (0 a 100) y muestra:
   "A" si es >= 90
   "B" si es >= 80
   "C" si es >= 70
   "D" si es >= 60
   "F" si es menor de 60
*/ s;
// RESPUESTA AQUÍ 👇

/*
33. Pide nombre de usuario y contraseña.
   Si usuario es "Alfredo" o "Moises" y contraseña es "1234",
   muestra "Acceso autorizado", de lo contrario "Denegado".
*/
// RESPUESTA AQUÍ 👇

/*
34. Pide la cantidad de artículos comprados y el precio por unidad.
   Si compró más de 10 artículos, aplica 10% de descuento.
   Muestra el total a pagar.
*/
// RESPUESTA AQUÍ 👇

/*
35. Ejercicio Final:
   Pide nombre, edad y tres notas.
   Calcula el promedio, determina si aprueba y muestra:
   "Hola [nombre], tienes [edad] años y tu promedio es [promedio]. Aprobado/Reprobado."
   Usa if-else-if o anidado.
*/
// RESPUESTA AQUÍ 👇









/* 
// Pr hcr MENúS


let edadd = parseInt(prompt(
`Ingrese una de las opciones para la calificacion:
1 = Muy Malo
2 = Malo
3 = Regular
4 = Bueno
5 = Exccelente`
));
switch(edadd){
  case 1:
    console.log("Muy malo");
    break;
  case 2:
    console.log("Malo");
    break;
  case 3:
    console.log("Regular");
    break;
  case 4:
    console.log("Bueno");
    break;
  case 5:
    console.log("Excelente");
    break;
  default:
    console.log("Dato invalido");
}

*/ */