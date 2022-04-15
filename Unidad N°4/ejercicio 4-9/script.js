/*
9. Hacer un algoritmo para un programa que calcule el pago que hacen un grupo de personas para ver una película teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por persona y para grupos de 8 personas o más el pago es 0.5 pesos por persona.
*/
var cantPersonas = Number(prompt("Ingrese numero de personas que van a ver la pelicula "));
var pago = 0;

if(cantPersonas<8 && cantPersonas>0){
    pago = cantPersonas * 1.5; 
    alert("El pago a realizar por la/s " + cantPersonas + " es: "+ pago ); 
}else if(cantPersonas>7) {
    pago = cantPersonas * 0.5;  
    alert("El pago a realizar por la/s " + cantPersonas + " es: "+ pago );   
}else{
    alert("Elija un numero mayor a cero" ); 
}

