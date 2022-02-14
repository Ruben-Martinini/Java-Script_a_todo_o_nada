/*
Realizar una pequeña calculadora que sume, reste y 
multiplique dos números.
Para ingresar los datos puedes utilizar la función prompt()
y alert() para mostrarlos. 
*/

var numero1 = parseFloat(prompt("ingrese el primer numero "));
var numero2 = parseFloat(prompt("ingrese el segundo numero "));
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;


alert("el resultado de la suma es: " + suma);
alert("el resultado de la resta es: " + resta);
alert("el resultado del producto es: " + multiplicacion);