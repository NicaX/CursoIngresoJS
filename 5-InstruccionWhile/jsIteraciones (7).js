function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var pregunta

	numero=prompt("Ingrese un número")
	pregunta=prompt("Quiere seguir sumando nùmeros?")
	pregunta=pregunta.toLowerCase();


	while(respuesta != pregunta)
	{
		numero=prompt("Ingrese un número");
		acumulador=acumulador+numero;
		contador++;
		pregunta=prompt("Quiere seguir sumando nùmeros?")
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN