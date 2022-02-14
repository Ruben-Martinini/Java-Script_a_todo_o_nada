/*
Se pedirá al mismo usuario ingresar su sueldo y una variable llamada bonus, 
se intentará sumar ambas y se evaluará con el profesor qué medida se debe 
tomar ya que los valores ingresados a través de la ventana se concatenan y 
no se suman por lo tanto se trabajará con parseInt() y parseFloat().
*/

var sueldo = parseFloat(prompt("cual es tu sueldo? "));
var bonus = parseFloat(prompt("Cuál fue tu bonus este mes? "));
var resultado = sueldo + bonus;



alert("el total de la suma es: " + resultado);
document.write("el total de la suma es: " + resultado);