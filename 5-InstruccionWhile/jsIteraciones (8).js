function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero 
	var respuesta='si';

	while(respuesta == "si")
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		
		
		contador++;
		if(numero<0)
			{
			negativo=numero*negativo;
			}
			else
			{
				positivo=numero+positivo;
			}
		respuesta=prompt("Quiere seguir sumando nùmeros?");
		respuesta=respuesta.toLowerCase();	
	}
			//hay que hacer un if/if else que descarte los resultados = 0
	
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN