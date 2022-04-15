/*
1.   1. Realiza un programa para obtener el menor de 2 números ingresados
*/
var num1 = parseFloat(prompt("Ingrese primer número: "));

var num2 = parseFloat(prompt("Ingrese segundo número: "));

var comparar = num1<num2;

if(comparar){
    alert("El primer número ingresado es el menor");
}else{
    alert("El segundo número ingresado es el menor");
}

