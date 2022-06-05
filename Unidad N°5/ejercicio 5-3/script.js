/*
3. Crear un programa que pida dos notas, evalue el promedio. Debe mostrar un alerta de "Materia aprobada" si las dos primeras notas son mayores a 7 y si el promedio es mayor a 7
*/


var nota1 =parseFloat(prompt("Ingrese nota 1 "));
var nota2 =parseFloat(prompt("Ingrese nota 2 "));

var promedio=(nota1+nota2)/2;
alert("el promedio es "+ promedio);

if(nota1>7 && nota2>7 ){
    alert("Materia aprobada por ser las dos notas mayores a 7") 
     
}else if(promedio>7){
    alert("Materia aprobada por ser el promedio mayor a 7"); 
     
}else{
    alert("Materia no aprobada");
}

 