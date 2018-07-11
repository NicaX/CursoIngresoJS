function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
if(edad < 13 || edad > 17 )
	//si pongo && se tienen que cumplir ambas condiciones, y es imposible
{
	alert("Usted no es un adolescente");

}

}//FIN DE LA FUNCIÓN