/*
 Se desea escribir los nombres de los días de la semana en función de la variable d (día) introducida por teclado.
 1(Lunes) – 2(martes) – 3(Miércoles)……..6(Sábado) – 7(Domingo)
*/
var d;
d=Number(prompt("ingrese dia de la semana del 1 al 7 "));
while(d>0 && d<=7){
    switch(d){
        case 1: alert("Lunes");
        break;
        case 2: alert("Martes");
        break;
        case 3: alert("Miercoles");
        break;
        case 4: alert("Jueves");
        break;
        case 5: alert("Viernes");
        break;
        case 6: alert("Sabado");
        break;
        case 7: alert("Domingo");
        break;
        
    }
    
    d=Number(prompt("ingrese dia de la semana del 1 al 7 "));
}


