function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);
/*debemos parsear la variable edad, por una cuestion de logica, ya que estamos trabajando con numeros, otros programas no
te permiten programar si no lo haces, hay que acostumbrarse xd*/
if(edad == 15)
{
	alert("Niña Bonita");
}


}//FIN DE LA FUNCIÓN