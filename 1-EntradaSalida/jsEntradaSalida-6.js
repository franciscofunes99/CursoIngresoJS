/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var num1=document.getElementById("numeroUno").value;
var num2=document.getElementById("numeroDos").value;
num1=parseInt( num1);
num2=parseInt(num2);
result= num1+num2
alert(" el resultado es: " + result);
}

