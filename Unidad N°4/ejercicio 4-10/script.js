/*
10. Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir un programa que dado el monto de una compra como valor numérico, diga cuanto debe abonar el cliente aplicando el descuento si es necesario.
*/
var montoCompra = parseFloat(prompt("Ingrese el monto de la compra "));
var pago = 0;

if(montoCompra>100 ){
    pago = cantPersonas * 0.85; 
     
}else{
    pago = montoCompra;  
     
}

alert("El cliente debe abonar " + pago );  