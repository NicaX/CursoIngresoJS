function mostrar()
{

	var contador=0;
	var mayor;
	var menor;
	var respuesta="si"
	//"bandera" es como una señalizacion, una marca
	// declarar variables
	

		while(respuesta =="si")
		{
			contador++
			numero=prompt("Ingrese el numero #"+contador);
			numero=parseInt(numero);

			if(contador==1)
			{
				menor=numero
				mayor=numero
				//solo va a entrar una vez, despues el valor de los numeros cambian 
			}

			if(numero<menor)
				{
					menor=numero;
				}
			if(numero>mayor) //control+D sirve para cambiar el nombre de l<s variables que esten abajo al mismo tiempo
				{
					mayor=numero;
				}

		respuesta=prompt("Quiere seguir ingresando numeros?")
		respuesta=respuesta.toLowerCase();
		document.getElementById("maximo").value=mayor;
		document.getElementById("minimo").value=menor;
		
		}


}//FIN DE LA FUNCIÓN