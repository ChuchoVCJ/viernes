var cantidad = 0;
var extra = 0;
var salario = 0;

function calcular(){
    cantidad = document.getElementById("idCantidad").value
    if (cantidad>=1 && cantidad <=40){
        salario = cantidad * 16000;
        console.log(salario);
        document.getElementById("salarioS").value = salario;
        document.getElementById("salarioE").value = "0";
        document.getElementById("total").value = salario;
        }
        else{
        extra = cantidad - 40;
        salario = (extra * 20000) + (40 * 16000);
        console.log(extra);
        console.log(salario);
        document.getElementById("salarioS").value = 40*16000;
        document.getElementById("salarioE").value = extra * 20000;
        document.getElementById("total").value = salario;
        }
}


/* var num1 = 4;
var num2 = 4;

if (num1 > num2){
    document.write("El número 1 es mayor");
}else if(num1 < num2){
    document.write("El número 2 es mayor");
}else{
    document.write("Son iguales");
} */

/* var num1 = 4;
var num2 = 5;

if (num1 > num2){
    document.write("El número 1 es mayor");
}else{
    document.write("El número 2 es mayor");
} */


/* let numUno = 5;

simple(numUno);

function simple (num){
    if (num < (4+2)){
        alert("El condicional es verdadero")
} */

/* var cap_inv, gan;
cap_inv = 150000;
gan = 0;

gan = cap_inv * 0.02;
document.write("La ganancia es de " + gan) */

/* const mensaje ="Hola. Este es un mensaje";
console.log(mensaje); */

/* function enviar(){
    document.getElementById("demo").innerHTML = "Hola JS";
    document.getElementById("demo2").style.fontSize = '70px';
} */

/* function enviar(){
    document.getElementById("demo").namedItem = "Hola JS";
    document.getElementById("demo2").style.fontSize = '70px'; 
}*/

/* function mostrar(){
    document.getElementById("label").style.display = ""
}

function ocultar(){
    document.getElementById("label").style.display = "none"
} */