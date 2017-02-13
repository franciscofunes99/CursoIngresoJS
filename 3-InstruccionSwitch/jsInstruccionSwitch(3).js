function Mostrar()
{
//tomo la edad  
var mesDelAño
var mesDelAño =document.getElementById("mes").value;
switch(mesDelAño){
    case"Marzo":
    case"Abril":
    case"Junio":
    case"Julio":
    case"Agosto":
    case"Septiembre":
    case"Octubre":
    case"Diciembre":
    case"Enero":
    alert(" este mes tiene 30 o mas dias ")
    break;
    case"Febrero":
    alert("este mes tiene no tiene mas de 28 dias")
    break;
}

}//FIN DE LA FUNCIÓN