/*
2. Realizar un algoritmo que determine  si un número es par o impar
*/
var num1 = parseFloat(prompt("Ingrese un número entero: "));

var espar = num1%2;

if(espar==0){
    alert("El  número ingresado es par");
}else{
    alert("El  número ingresado es impar");
}

