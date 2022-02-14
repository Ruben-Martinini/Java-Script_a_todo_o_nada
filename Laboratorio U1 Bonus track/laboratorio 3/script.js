/*
En determinados puntos de las calles y autopistas se 
encuentran dispositivos que permiten obtener la velocidad 
de un vehículo y determinar si está en infracción o no.
Para obtener la velocidad, calculan la distancia recorrida 
en una determinada porción de tiempo (3 segundos). 
Desarrollar un programa que, reciba la distancia recorrida 
por el automóvil en cuestión (la distancia expresada en 
kilómetros) y devuelva la velocidad de dicho automóvil en 
metros/segundo. 
*/

var distancia = parseFloat(prompt("ingrese distancia en km recorrida por el vehículo: "));

var velocidad = distancia/(3/3600);



alert("la velocidad del vehículo es: " + velocidad + "km/h");
