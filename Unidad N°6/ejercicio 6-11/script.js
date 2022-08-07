/*
Realizar un diagrama  que muestre en pantalla los números desde un valor inicial,
hasta un valor final, ingresados por el usuario en forma descendente 
*/
var n1=0, n2=0;
document.write("Ej 11: mostrar en pantalla valores desde n1 hasta n2 descendente");
n1=Number(prompt("ingrese un numero entero N1"));
n2=Number(prompt("ingrese un numero entero N2"));
document.write("<br>");
for(let i=n1,j=0;i<=n2,j<=n2-n1;i++,j++){
document.write(n2-j," - ");
}
document.write("<br>");
/*
Dibujar los siguientes patrones ocupando document.write, 
para rellenar los espacios vacíos se debe imprimir un espacio vacío.
*/
for(let i=0;i<=5;i++){
    document.write("*****");
    document.write("<br>");   
}
var ast='*';
for(let i=0;i<=5;i++){
    
    document.write(ast);
    ast=ast+'*';
    document.write("<br>");   
}

document.write('*****');
document.write("<br>"); 

for(let i=0;i<=2;i++){
    document.write('*----*');
    document.write("<br>");       
}
document.write('*****');
document.write("<br>"); 