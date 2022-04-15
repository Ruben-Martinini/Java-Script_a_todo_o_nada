/*
6. Realizar un programa que calcule el importe total a abonar en una factura, teniendo en cuenta que si el importe total supera los 1000$  se aplica un descuento del 20%.
*/
var importe = Number(prompt("Ingrese el importe de su factura"));
var resultado="";

if(importe<1000){
    alert("El importe total es $" + importe)
   
}else {
    importe=importe*0.8;
    alert("El importe total con descuento del 20% es $" + importe)
}

