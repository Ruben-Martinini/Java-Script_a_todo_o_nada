/*
1. Crear un programa que me pida correo y contraseña, debe dar un alerta si los dos datos ingresados son validos
*/
const usuario="yo@mail.com";
const pass= 1234;
var correo =prompt("Ingrese su correo electónico ");
var contraseña =prompt("Ingrese su contraseña ");

if(correo==usuario && contraseña==pass ){
    alert("los datos ingresados son correctos") 
     
}else{
    alert("los datos ingresados son incorrectos"); 
     
}

 