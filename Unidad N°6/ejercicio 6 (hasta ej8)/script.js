/*
Escribir un Programa que imprima la palabra “Hola” 10 veces
*/
document.write("Ej 1: 10 veces HOLA");
document.write("<br>");
for(let i=0;i<10;i++){
document.write("Hola ");
}
document.write("<br>");
/*
Escribir un algoritmo que escriba todos los números enteros entre 1 y 100
*/ 
document.write("Ej 2: imprimir numeros del 1 al 100");
document.write("<br>");
for(let i=0;i<100;i++){
document.write(i+1," - ");
}
document.write("<br>");
/*
Diseñar un programa que calcule la suma de los 20 primeros números impares
*/
var cont=0;
var impar=1;
var acumImpar=0;
document.write("Ej 3: Suma de los primeros 20 impares");
document.write("<br>");
while(cont!=20){
    acumImpar=acumImpar+impar;
    impar+=2;
    cont++;
}
document.write("La suma es: ",acumImpar);
document.write("<br>");
/*
Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.
*/
var n=0;
document.write("Ej 4: imprimir numeros del 1 a n");
n=Number(prompt("ingrese un numero entero"));
document.write("<br>");
for(let i=0;i<n;i++){
document.write(i+1," - ");
}
document.write("<br>");
/*
Mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo ingresa el usuario en un prompt.
*/
document.write("Ej 5: imprimir numeros del n a 1");
document.write("<br>");
for(let i=0;i<n;i++){
document.write(n-i," - ");
}
document.write("<br>");
/*
Escribir utilizando console.log la tabla del 9.
*/
document.write("Ej 6: imprimir tabla del 9 en consola");
for(let i=0;i<11;i++){
    console.log(" 9 x ",i, " = ",9*i);
    }
    document.write("<br>");
/*
Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.
*/