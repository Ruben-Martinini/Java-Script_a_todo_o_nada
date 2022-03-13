/*
1.    Declarar una variable llamada noValgoNi5 y asignarle el valor 4. Mostrar el valor de la variable por la terminal.
*/
var noValgoNi5 = 4;
console.log(noValgoNi5);


/*
2.   Declarar 3 variables:
o    miAnioDeNacimiento y asignarle el valor de tu año de nacimiento.
o    meGustariaTener80Anios y asignarle el número 80.
o    voyATener80ElAnio y asignarle el resultado de sumar las 2 variables anteriores
     Mostrar por la terminal el año en el que vas a cumplir 80 años.
*/
var miAnioDeNacimiento = 1978;
var meGustariaTener80Anios = 80;
var voyATener80ElAnio = miAnioDeNacimiento  + meGustariaTener80Anios;

console.log("el año en el que vas a cumplir 80 años es " + voyATener80ElAnio);

/*
3.    Declarar 3 variables:
o    variable costoDeUnaTele y asignarle el valor 10000.
o    variable ahorros y asignarle el valor 9000.
o    variable dineroQueMeFalta y asignarle el resultado de restar las 2 variables anteriores.
Mostrar por la terminal cuanto dinero te falta para comprar la tele.
*/
var costoDeUnaTele = 10000;
var ahorros = 9000;
var dineroQueMeFalta = costoDeUnaTele - ahorros;

console.log("dinero me falta para comprar la tele " + dineroQueMeFalta);

/*
4.    Declarar 3 variables:
o    diasPorAnio y asignarle el número 365
o    cantidadDeAniosEnUnaDecada y asignarle el número 10
o    cantidadDeDiasEnUnaDecada y asignarle el resultado de multiplicar las 2 variables anteriores.
Mostrar por la terminal cuantos días hay en una década.
*/
var diasPorAnio = 365;
var cantidadDeAniosEnUnaDecada = 10;
var cantidadDeDiasEnUnaDecada = diasPorAnio * cantidadDeAniosEnUnaDecada;
console.log("los días que hay en una década son " + cantidadDeDiasEnUnaDecada)

/*
5.    Teniendo en cuenta que una pizza siempre tiene 8 porciones, mostrar por la terminal cuantas pizzas tengo en la mesa si conté 24 porciones.
*/
var porcionesPizza = 8;
var cantPorcMesa = 24;
var cantidadPizzas = cantPorcMesa / porcionesPizza;
console.log(cantidadPizzas);

/*
6.    Declarar una variable de nombre miAnimalFavorito y asignarle como valor el string que represente el animal que más te gusta. Escribir el código necesario para mostrar por la terminal el valor true si el animal que más te gusta es un 'perro'. De lo contrario, mostrar false. Usar el operador de igualdad (==).
*/
var miAnimalFavorito = "lobo";
if(miAnimalFavorito=="perro"){
    console.log(true);
}else{
    console.log(false);
}

/*
7.    Usar el operador de desigualdad (!=) para mostrar por la terminal el resultado de comparar la cadena de caracteres 'flan' y 'flan con dulce de leche' (Podés crear todas las variables que quieras, incluso podés resolverlo sin usar variables).
*/
var postre1 = 'flan';
var postre2 = 'flan con dulce de leche';
if(postre1!=postre2){
    console.log("no son el mismo postre");
}else{
    console.log("son el mismo postre")
}

/*
8.    Declarar una variable llamada soyMayorDeEdad y asignarle el resultado de comparar tu edad y el número 17 usando el operador > (mayor). Mostrar el valor de la variable por la terminal.
*/
var miEdad = 44;
var soyMayorDeEdad;
if(miEdad>17){
    soyMayorDeEdad=true;
    console.log("la variable soyMayorDeEdad es " + soyMayorDeEdad)
}else{
    soyMayorDeEdad=false;
    console.log("la variable soyMayorDeEdad es " + soyMayorDeEdad) 
}

/*
9.    Declarar una variable llamada soyMenorDe25 y asignarle el resultado de comparar tu edad y el número 25 usando el operador < (menor). Mostrar el valor de la variable por la terminal.
*/
var miEdad = 44;
var soyMenorDe25;
if(miEdad<25){
    soyMenorDe25=true;
    console.log("la variable soyMenorDe25 es " + soyMenorDe25)
}else{
    soyMenorDe25=false;
    console.log("la variable soyMenorDe25 es " + soyMenorDe25) 
}

/*
10. Declarar una variable llamada estamosEnEnero y asignarle el resultado de comparar si el nombre del mes actual es igual a 'Enero'. Hacerlo usando el operador de igualdad estricta (===). Mostrar el valor de la variable por la terminal.
*/
var mesActual = 'Marzo';
var estamosEnEnero;
if(mesActual==='Enero'){
    estamosEnEnero=true;
    console.log("la variable estamosEnEnero es " + estamosEnEnero)
}else{
    estamosEnEnero=false;
    console.log("la variable estamosEnEnero es " + estamosEnEnero)
}

/*
11. Declarar una variable llamada noEstamosEnEnero y asignarle el resultado de comparar si el nombre del mes actual y el string 'Enero' son diferentes. Hacerlo usando el operador de desigualdad estricta (!==). Mostrar el valor de la variable por la terminal.
*/
var mesActual = 'Marzo';
var noEstamosEnEnero;
if(mesActual!=='Enero'){
    estamosEnEnero=true;
    console.log("la variable noEstamosEnEnero es " + noEstamosEnEnero)
}else{
    noEstamosEnEnero=false;
    console.log("la variable noEstamosEnEnero es " + noEstamosEnEnero)
}

/*
12. Declarar 3 variables:
o    miNotaEnElParcial y asignarle un 8
o    notaMinimaParaAprobar y asignarle un 6
o    estoyAprobado y asignarle el resultado de comparar el número las dos variables anteriores usando el operador >=(Mayor o igual).
Mostrar el valor de la variable estoyAprobado por la terminal.
*/
var miNotaEnElParcial = 8;
var notaMinimaParaAprobar = 6;
var estoyAprobado;
if(miNotaEnElParcial>=notaMinimaParaAprobar){
    estoyAprobado=true;
    console.log("la variable estoyAprobado es " + estoyAprobado)
}else{
    estoyAprobado=false;
    console.log("la variable estoyAprobado es " + estoyAprobado)
}

/*
13. Declarar una variable llamada esHoraDeAlmorzar cuyo valor sea el resultado de comparar con el operador <= (Menor o igual) si la hora actual es menor o igual a 12. Mostrar el valor por la terminal.
*/
 var esHoraDeAlmorzar;
 var horaActual = 16;
 if(horaActual<=12){
    esHoraDeAlmorzar=true;
    console.log("la variable esHoraDeAlmorzar es " + esHoraDeAlmorzar)
}else{
    esHoraDeAlmorzar=false;
    console.log("la variable esHoraDeAlmorzar es " + esHoraDeAlmorzar)
}