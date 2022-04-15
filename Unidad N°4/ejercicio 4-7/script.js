/*
7. Hacer un programa para obtener las comisiones por ventas de un vendedor. Los datos que se ingresan son monto vendido y código de vendedor Si el código de vendedor es menor a 100 las comisiones son de un 30%, si el código esta entre 100 y 200 son del 20% y si es mayor a 200 10%. Mostrar el código de vendedor, el monto vendido y el valor de las comisiones.
*/
var codigoVendedor = Number(prompt("Ingrese el codigo del vendedor"));
var montoVendido = Number(prompt("Ingrese el monto vendido"));
var comision = 0;
if(codigoVendedor<100){
comision = montoVendido * 0.3;  
}else if(codigoVendedor>99 && codigoVendedor<201) {
    comision = montoVendido * 0.2; 
    
}else if(codigoVendedor>200 ) {
    comision = montoVendido * 0.1;     
}

alert("El código del vendedor es: " + codigoVendedor + ", el monto vendido es: " + montoVendido + " y el valor de la comisión es: " + comision );  