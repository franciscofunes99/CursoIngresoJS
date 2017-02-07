function Mostrar()
{
//tomo la edad  
var edad
edad= document.getElementById("edad").value;
if(edad>18){
    alert("eres mayor de edad")
}
    if(edad>=13&&edad<=17){
    alert("eres adolescente")
    }
    if(edad<13){
    alert("eres menor de edad")
}



}//FIN DE LA FUNCIÓN