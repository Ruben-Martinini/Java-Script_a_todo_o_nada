/*
1) Definición de Algoritmo (dar un ejemplo)

2) Que es Pseudocodigo (dar un ejemplo)


3) Realizar los siguientes problemas:

a)    Realizar un Programa en JavaScript que resuelva los siguientes problemas (los valores deben ser asignados por ustedes):

superficie de un rectángulo
superficie de un triangulo
superficie de un circulo
*/
var base = Number(prompt("ingrese la base de un rectangulo y triangulo: "));
var altura = Number(prompt("ingrese la altura de un rectangulo y triangulo: "));
var radio = Number(prompt("ingrese el radio de un circulo: "));
var supRect = base * altura;
var supTrian = supRect/2;
var supCirculo = 3.1415 * radio * radio;

alert("la superficie del rectangulo es " + supRect + ", la superficie del triangulo es " + supTrian + " y la superficie del circulo es " + supCirculo);
/*
b) Crear 3  variables numéricas, calcular e imprimir producto, suma y el promedio. Mostrar los resultados.
*/
var valor1 = Number(prompt("ingrese primer numero: "));
var valor2 = Number(prompt("ingrese segundo numero: "));
var valor3 = Number(prompt("ingrese tercer numero: "));
var sumaDe3= valor1+valor2+valor3;
var productoDe3= valor1*valor2*valor3;
var promedioDe3= sumaDe3/3;
alert("la suma de los tres numeros es " + sumaDe3 + ", el producto de los tres numeros es " + productoDe3 + " el promedio de los tres numeros es " + promedioDe3);

/*
c) Una tienda ofrece un descuento del 15% sobre el total de cada  compra y un cliente desea saber cuánto deberá pagar finalmente por su compra. Deberán crear 5 artículos los cuales tendrán sus nombres y valores, luego mostrar el descuento aplicado mas el total final
*/
var art1 = 90;
var art2 = 70;
var art3 = 140;
var art4 = 20;
var art5 = 50;
var totalArts= art1+art2+art3+art4+art5;
var descuentoSobretotal =totalArts*0.85;
alert("los articulos comprados son harina $"+art1+", pan $"+art2+", lentejas $"+art3+", azucar $"+art4+", arroz $"+art5);
alert("el monto total por los cinco artículos es "+totalArts+" y con el descuento de 15% es "+descuentoSobretotal);

/*
d) Dada una cantidad en pesos (el valor lo deben asignar ustedes), obtener la equivalencia en dólares, asumiendo que la unidad cambiaría es un dato desconocido.
*/
var pesosC= Number(prompt("ingrese cantidad de pesos a convertir en dolares: "));
var equivPD= pesosC/120;
alert("la cantidad de pesos "+pesosC+" es equivalente a la cantidad de dolares "+equivPD);

/*
e) Un  cliente realizo una compra y necesita saber el importe del IVA de la misma. Realizar un algoritmo que dado el importe de una factura calcular el valor correspondiente al IVA.
*/
var importe= Number(prompt("ingrese el importe de la factura que quiera conocer el iva: "));
var ivaSimpot= importe * 0.21;

alert("el iva aplicado a su importe: "+importe+ " es "+ivaSimpot);