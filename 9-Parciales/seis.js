/*Realizar el algoritmo que pida el peso en kilos (validar que sea mayor a 0,”cero”) 
de cada uno de los 50 contenedores (pedir 50 veces) de un deposito por prompt, e
 informar cual fue el más pesado y cuál fue el menos pesado.*/

function Mostrar()
{
	var peso;
	var i=0;
	var maximo;
	var minimo;
	/*for(var contador=1;contador < 6; contador++);
	{
		peso=prompt("Ingrese el peso del contenedor # "+contador);
	}*/
	while(i<5)
	{
		peso=prompt("ingrese el peso en kg");
		peso=parseFloat(peso);

		while(peso<=0)
		{
			peso=prompt("Error, ingrese el peso en kg")
			peso=parseFloat(peso);
		}
	
	i++;
	
	}
}
