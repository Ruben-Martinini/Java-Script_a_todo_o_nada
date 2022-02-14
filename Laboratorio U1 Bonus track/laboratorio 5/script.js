/*
El Ministerio de Salud estuvo investigando el consumo 
de azúcar del año pasado, con el fin de implementar 
políticas para reducir su consumo en el año venidero.
Gracias a estadísticas, han logrado obtener la siguiente 
tabla con los primeros 6 meses del año pasado. Sin 
embargo, debido a diversos factores, no han podido 
completar la tabla con los otros 6 meses restantes.
¿Podrías hacer un programa que permita, ingresando 
el número de mes, obtener el consumo de azúcar en 
dicho mes? 
*/

var mes = Number(prompt("ingrese el numero de mes en que desea conocer el consumo de azucar "));


var consumo = mes * 15;

alert("el consumo de azucar es: " + consumo + " mil kilos");

