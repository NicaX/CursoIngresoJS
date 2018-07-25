function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	sexo=sexo.toLowerCase();

	while(sexo != "f" && sexo != "F" && sexo != "m")
	{
		alert("sexo incorrecto, ingrese un sexo válido");
		var sexo = prompt("ingrese f ó m .");
		sexo=sexo.toLowerCase();
	}


	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN