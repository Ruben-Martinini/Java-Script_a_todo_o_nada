/*
4. Declarar una variable que se llame posicionEnLaCarrera y asignarle el número 6. Mostrar por la terminal uno de los siguientes mensajes según la posición que salió el corredor:

-'FELICITACIONES, SALISTE 1RO' si la posicionEnLaCarrera es 1.
-'Te falto poquito para ganar' si la posicionEnLaCarrera es 2.
-'Sos un orgullo para tu familia' si la posicionEnLaCarrera es 3.
-'Volvé a tu casa' si la posicionEnLaCarrera es mayor a 3.
-'No tires fruta' si la posicionEnLaCarrera es otro valor no contemplado antes.
*/
var posicionEnLaCarrera = 6;
posicionEnLaCarrera = Number(prompt("elija entre los siguientes números para establecer la posición en el resultado de la carrera"));

if(posicionEnLaCarrera === 1){
    console.log('FELICITACIONES, SALISTE 1RO');
   
}else if(posicionEnLaCarrera === 2) {
    console.log('Te falto poquito para ganar');
   
}else if(posicionEnLaCarrera === 3) {
    console.log('Sos un orgullo para tu familia');
   
}else if(posicionEnLaCarrera > 3 && posicionEnLaCarrera < 7 ) {
    console.log('Sos un orgullo para tu familia');
   
}else{
    console.log('No tires fruta');
}

