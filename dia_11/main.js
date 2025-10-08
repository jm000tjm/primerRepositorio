/*
let vn_1=111
let vn_2=222
let vb_1=true;
let vb_2=true;
let vs_pais="Francia";
let vs_cntnnt="Europa";
let vi_1;
const vc_1=3.1416;

console.log(typeof vn_1);
console.log(typeof vn_2);
console.log(typeof vb_1);
console.log(typeof vb_2);
console.log(typeof vs_pais);
console.log(typeof vs_cntnnt);
console.log(typeof vi_1);
console.log(typeof vc_1);

*/

/* ------------------------------------------------------------------------------ */
// =======================================================
// OPERADORES ARITMÉTICOS (EJERCICIOS 1 - 8)
// =======================================================
let clnt = "Fulanito";
let varon = false;
let ed = 20;
let sld = 11;

if( varon == true && ed >= 18 && ed <= 35 && sld >= 10 ) {
    console.log("BIENVENIDO, usted puede entrar. Le informamos que en este momento usted tiene usted un saldo de: $ ",sld);
    console.log("Y le informamos que con ese saldo usted puede jugar: ",sld / 5 , " horas. Disfrute de su juego.");
} else {
    if( varon == false ) {
        console.log("Disculpe las molestias por el momento NO estamos en CONDICIONES de recicibir damas, cuando lo estemos le informamos");
    }
    if(ed < 18 || ed > 35 ) {
        console.log("Disculpe las molestias por políticas de la empresa, en este momento NO se están admitiendo personas menores de edad ni mayores de 35 año. Cuando cambien las políticas se lo haremos saber. Que tenga buen día.")
    }
    if( sld < 10 ) {
              console.log("NO puede entrar, necesita recargar saldo, porque en este momento usted tiene un saldo de: $ ",sld);
    }
}

/* 1. Declara dos variables a y b con valores numéricos.
   Muestra en consola su suma, resta, multiplicación y división.    */
// RESPUESTA AQUÍ 👇
let aa = 5;
let bb = 2;
console.log("Suma: ",aa + bb);
console.log("Resta: ",aa - bb);
console.log("Multiplicación: ",aa * bb);
console.log("División: ",aa / bb);
/* 2. Calcula el área de un rectángulo (base * altura).
   Muestra el resultado en consola.     */
// RESPUESTA AQUÍ 👇
let altura=10
let base=20
let ar=altura * base;
console.log("Area del rectángulo: ", ar)
/* 3. Calcula el área de un triángulo usando la fórmula (base * altura) / 2.   */
// RESPUESTA AQUÍ 👇
let at = ar/2;
console.log("Área del triángulo:", at)

/* 4. Calcula el módulo (resto) d dividir 25 ntr 4.
   Usa el operador %.   */
// RESPUESTA AQUÍ 👇
let v25=25
let div_mod = v25 % 4;
console.log("Resultado de la División Modular: ", div_mod)
/* 5. Declara una variable "numero" y muestra su cuadrado y su cubo.
   Usa los operadores **2 y **3.        */
// RESPUESTA AQUÍ 👇
let nmr = 5
let cdrd = nmr ** 2 ;  // Potencia al cuadrado . 
let cubo = nmr ** 3 ;  // Potencia al cubo .

console.log("5 al cuadrado: ", cdrd );
console.log("5 al cubo: ", cubo );
/* 6. Calcula el perímetro d un cuadrado c lado = 5.   Fórmula: lado * 4        */
// RESPUESTA AQUÍ 👇
let lado = 5
let prmtr= lado * 4
console.log("El Perímetro del cuadrado es: ", prmtr)

/* 7. Declara dos números y muestra si su suma es par o impar.
   Usa el operador % para comprobar si el resto es 0.       */
// RESPUESTA AQUÍ 👇
let nmr1 = 1
let nmr2 = 2
let sm = nmr1 + nmr2
let divmodular = sm % 2
divmodular = 0
? console.log("La suma es:", sm," y es Par.")
:  console.log("La suma es:", sm," y es Impar.");
/* 8. Calcula el promedio d tres notas y muestra el resultado n consola.      */
// RESPUESTA AQUÍ 👇
let nota1=10
let nota2=9
let nota3=8
let prmd=(nota1+nota2+nota3)/3;
console.log("El promedio de: ",nota1,", ",nota2," y ",nota3," es [ ",prmd, " ]");
// =======================================================
// O P E R A D O R E S    d    A S I G N A C I Ó N    (EJERCICIOS 9 - 12)
// =======================================================
/* 9. Declara una variable x = 10.   Usa x += 5 y muestra el nuevo valor.         */
// RESPUESTA AQUÍ 👇
let var_x=10
var_x += 5 ;
console.log("Suma acumulativa: ",var_x);

/* 10. Declara una variable puntos = 100.    Resta 20 puntos usando puntos -= 20 y muestra el resultado.     */
// RESPUESTA AQUÍ 👇
let puntos = 100
puntos -= 20 ;
console.log("Resta acumulativa. Valor de puntos:",puntos);
/* 11. Declara precio = 50.    Duplica su valor usando precio *= 2 y muestra el resultado.     */
// RESPUESTA AQUÍ 👇
let precio=50
precio *= 2 ;
console.log("Valor de precio:",precio);
/* 12. Declara saldo = 200.  Divide su valor ntr 4 usando saldo /= 4 y muestra el nuevo saldo.  */
// RESPUESTA AQUÍ 👇
let saldo=200
saldo /= 4 ;
console.log("Valor de saldo:",saldo);
// =======================================================
// O P E R A D O R E S    d     C O M P A R A C I Ó N (EJERCICIOS 13 - 16)
// =======================================================
/* 13. Declara dos variables numéricas.    Muestra si son iguales (==) o diferentes (!=).   */
// RESPUESTA AQUÍ 👇
let varnmrc1 = 2
let varnmrc2 = 2
varnmrc1 == varnmrc2 ? console.log("Si son iguales") : console.log("No son iguales");
varnmrc1 != varnmrc2 ? console.log("Si son diferentes") : console.log("No son diferentes");
/* 14. Declara edad = 17.    Muestra si es mayor o igual a 18 (edad >= 18). */
// RESPUESTA AQUÍ 👇
let edad = 17
edad >= 18 ? console.log("Si es mayor de edad.") : console.log("No es mayor de edad.");
/* 15. Declara dos variables a = 10, b = "10".
   Muestra el resultado de a == b y a === b para ver la diferencia.     */
// RESPUESTA AQUÍ 👇
let a = 10
let b = "10" ;
let m = 10
let n = "10" ;
a == b ? console.log(" ==  ") : console.log("No es ==");
a === b ? console.log(" === n Vlr y Tipo") : console.log("No es ===");
/* 16. Declara dos variables c = 15, d = 20.
    Muestra si c es menor que d y si c es mayor o igual que d.  */
// RESPUESTA AQUÍ 👇
let c = 15 ;   let d = 20 ;
c < d ? console.log("c < d") : console.log("c NO es < d");
c >= d ? console.log("c >= d") : console.log("c NO es >= d");
/* =======================================================
// O P E R A D O R E S    L Ó G I C O S    (EJERCICIOS 17 - 20)
// =======================================================
/* 17. Declara tieneLicencia = true y tieneAuto = false.
    Usa && (AND) para verificar si puede conducir. */
// RESPUESTA AQUÍ 👇
let tieneLicencia = true;   let tieneAuto = false;
tieneLicencia == true && tieneAuto == true ? console.log("Puede conducir porque tiene Licencia y Auto.") 
: console.log("NO puede conducir")
/* 18. Declara esMayor = true y tieneEntrada = false. Usa || (OR) para verificar si puede entrar al cine. */
// RESPUESTA AQUÍ 👇
let esMayor = true;     let tieneEntrada = false;
esMayor || tieneEntrada ? console.log("Puede entrar al cine") : console.log("NO puede entrar al cine");
/* 19. Declara variable conectado = false.     Usa ! (NOT) para mostrar el valor contrario.     */
// RESPUESTA AQUÍ 👇
let conectado = false;
console.log("Valor negado de conectado: ",!conectado)
/* 20. Declara edad = 25 y nacionalidad = "boliviana".
    Usa operadores lógicos pr verificar si puede votar
    (edad >= 18 && nacionalidad == "boliviana").    */
// RESPUESTA AQUÍ 👇
let add = 25;       let ncnldd="boliviana";
add >= 18  &&  ncnldd == "boliviana"  ? console.log("Puede votar porque es >= a 18 años y tiene nacionalidad boliviana.")
: console.log("NO puede votar.")
// =======================================================
// COMBINACIÓN DE TODOS LOS TEMAS (EJERCICIOS 21 - 30)
// =======================================================

/*
21. Declara dos números y muestra su suma.
    Luego, verifica si el resultado es mayor que 50.
*/
// RESPUESTA AQUÍ 👇

/*
22. Declara tres notas (nota1, nota2, nota3).
    Calcula el promedio y muestra si aprobó (promedio >= 60).
*/
// RESPUESTA AQUÍ 👇
let nta1 = 10;    let nta2 = 9;     let nta3 = 8;     let promedio = (nta1+nta2+nta3) / 3;
console.log("El promedio es:", promedio );
promedio >= 60 ? consoled.log("Aprobaste con promedio de: ", promedio )
: consoled.log("Reprobaste con promedio de:", promedio );
/*
23. Declara nombre y edad.
    Muestra un mensaje como:
    "Hola Kevin, tienes 20 años. ¿Eres mayor de edad? true"
*/
// RESPUESTA AQUÍ 👇

/*
24. Declara precioProducto y dineroDisponible.
    Muestra si puedes comprar el producto (dineroDisponible >= precioProducto).
*/
// RESPUESTA AQUÍ 👇

/*
25. Declara base y altura.
    Calcula el área de un triángulo (base * altura) / 2.
*/
// RESPUESTA AQUÍ 👇

/*
26. Declara edad, tieneCedula y tienePasaje.
    Usa operadores lógicos para saber si puede viajar.
    (edad >= 18 && tieneCedula && tienePasaje)
*/
// RESPUESTA AQUÍ 👇

/*
27. Declara saldo = 100 y gasto = 30.
    Usa operadores de asignación para restar el gasto y mostrar el nuevo saldo.
*/
// RESPUESTA AQUÍ 👇

/*
28. Declara a = 10, b = 5.
    Muestra si la suma es par o impar (usa %).
*/
// RESPUESTA AQUÍ 👇

/*
29. Declara usuario = "Kevin" y password = "1234".
    Usa && para verificar si ambos son correctos.
*/
// RESPUESTA AQUÍ 👇

/*
30. Ejercicio Final:
    Declara tus datos y calcula tu promedio.
    Luego, muestra un mensaje completo.

    let nombre = "Kevin";
    let edad = 28;
    let nota1 = 70;
    let nota2 = 80;

    let promedio = (nota1 + nota2) / 2;
    let aprobado = promedio >= 60;

    console.log(`Hola ${nombre}, tienes ${edad} años, tu promedio es ${promedio}, aprobado: ${aprobado}`);
*/
// RESPUESTA AQUÍ 👇
