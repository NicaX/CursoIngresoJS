/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=prompt("Ingrese su Nombre");
	document.getElementById("elNombre").value=nombre;
	/*poniendo el "=nombre", al final del document indico que "nombre" es el nuevo valor de 
	la caja de texto
	
	si es una entrada o una salida, se diferencia con el orden entre el x1=x2

	cuando utilizo el "document" estoy refiriendome al html
	cuando utilizo el ".value" es porque quiero el valor de la caja de texto
	

	*/


}

