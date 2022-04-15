/*
8. Se desea escribir los nombres de los días de la semana en función de la variable d (día) introducida por teclado.  1(Lunes) – 2(martes) – 3(Miércoles)……..6(Sábado) – 7(Domingo)
*/
var d = Number(prompt("Ingrese el dia de la semana 1,2,3,4,5,6 o 7"));
var dia;

if(d==1){
    dia="lunes"; 
}else if(d==2) {
    dia="martes";    
}else if(d==3 ) {
    dia="miercoles";     
}else if(d==4 ) {
    dia="jueves";     
}else if(d==5 ) {
    dia="viernes";     
}else if(d==6 ) {
    dia="sabado";     
}else if(d==7 ) {
    dia="domingo";     
}else{
    dia="no corresponde a un dia de la semana";
}

alert("El día de la semana ingresado es: " + dia );  