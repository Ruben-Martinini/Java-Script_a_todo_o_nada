/*
1. Realizar una ventana de usuario 
donde el mismo ingresará:
a. edad
b. nombre
c. apellido
2. Estos datos se mostrarán en una 
alerta, en un texto complejo tal como
‘El nombre del usuario es…’
Este mismo proceso anterior, se mostrará en el 
documento a través de document.write()
*/

var edad = Number(prompt("ingrese su edad: "))
var nombre = prompt("ingrese su nombre: ")
var apellido = prompt("ingrese su apellido: ")

alert("el nombre del usuario es : " + nombre + " " + apellido + " y su edad es: " + edad + " años.")
document.write("el nombre del usuario es : " + nombre + " " + apellido + " y su edad es: " + edad + " años.")