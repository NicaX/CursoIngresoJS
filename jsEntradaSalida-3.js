/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function mostrar()
{
	//alert("Ejercicio 3");

	//en caso de error, puedo verificar en el chrome con f12, luego en source si no lo veo en la consola
	
	//console.log("aver al sine");
	
	/*El console.log() sirve para "mensajes" entre programadores, figuran en la consola, sin 
	embargo para poder ver los comentarios, hay que entrar en el "source"*/

	/*document toma datos del html, el id lo utilizamos para leer, y para traer.
	var nombre;
	nombre=document.getElementById("elNombre");
	alert(nombre);

	Ese codigo nos tira un error, ya que el cuadro de texto no tiene valor, para asignarselo se usa el ".value" al final para 

	*/
	var nombre;
	nombre=document.getElementById("elNombre").value;
	alert(nombre);
}


