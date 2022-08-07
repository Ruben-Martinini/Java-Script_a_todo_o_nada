/*
Se ingresan un conjunto de n alturas de personas por teclado. Mostrar la altura promedio de las personas.
*/
var n=0,  cont=1;
var acumAlt=0, prom;
do{
    n=Number(prompt("ingrese altura - SALIR 0 "));
    acumAlt=acumAlt+n;
    cont++;
}while(n!=0);
prom=acumAlt/(cont-1);
alert("el promedio de las "+ (cont-2) + " alturas es "+ prom);

