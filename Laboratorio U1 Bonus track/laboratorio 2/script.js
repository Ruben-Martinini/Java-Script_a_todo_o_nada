/*
Realizar una pequeña calculadora que permita calcular el 
promedio entre las notas de 10 alumnos. 
*/

var nota1 = parseFloat(prompt("ingrese nota 1 "));
var nota2 = parseFloat(prompt("ingrese nota 2 "));
var nota3 = parseFloat(prompt("ingrese nota 3 "));
var nota4 = parseFloat(prompt("ingrese nota 4 "));
var nota5 = parseFloat(prompt("ingrese nota 5 "));
var nota6 = parseFloat(prompt("ingrese nota 6 "));
var nota7 = parseFloat(prompt("ingrese nota 7 "));
var nota8 = parseFloat(prompt("ingrese nota 8 "));
var nota9 = parseFloat(prompt("ingrese nota 9 "));
var nota10 = parseFloat(prompt("ingrese nota 10 "));

var promedio = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10)/10;



alert("el resultado del promedio de las diez notas es: " + promedio);
