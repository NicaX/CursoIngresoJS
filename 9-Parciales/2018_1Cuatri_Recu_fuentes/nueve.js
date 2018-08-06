/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso
el cual debe ser entre 1 y 1000 y la temperatura del hábitat (entre -30 y 30) hasta que 
el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/
function mostrar()
{
	var nombreAnimal
	var peso;
	var temperatura
	var respuesta="si"
	var cantidadTemperaturasPares;
	var

	while(respuesta=="si")
	{
		nombreAnimal=prompt("Ingrese el nombre del animal");

		peso=prompt("Ingrese el peso del animal");
		peso=parseInt(peso);

		while(peso < 1|| peso >1000)
		{
			peso=prompt("Error, Ingrese el peso del animal");
			peso=parseInt(peso);
		}

		temperatura=prompt("Ingrese la temperatura del Hábitat");
		temperatura=parseInt(temperatura);

		while(temperatura < -30|| temperatura >30)
		{
			temperatura=prompt("Error, Ingrese la temperatura del Hábitat");
			temperatura=parseInt(temperatura);
		}

		/*
		if(temperatura%2==0)
		{
			temperaturaspares++;
		}
		if(contador==1)
		{
			maspesado=peso;
			maspesadonombre=nombre
			maspesadotemperatura=temperatura
		}
		else
		{
			if(peso>masPesado)
				{
				maspesado=peso;
				maspesadonombre=nombre
				maspesadotemperatura=temperatura;
				}
		}
		if(temperatura<0)
		{
			animalesbajocero++
			if(animalesbajocero==1)
			{
				pesomaximobajocero=peso
				pesominimobajocero=peso
			}
			else
			{
				if(peso>pesomaximo)
				{
					pesomaximobajocero=peso
					
				}
				else
				{
					pesominimobajocero=peso
				}
			}
		}
	
*/
		respuesta=prompt("Quiere seguir ingresando animales? (si/no)")
		respues=respuesta.toLowerCase();
		while(respuesta != "si" && respuesta != "no")
		{
			respuesta=prompt("Error, Quiere seguir ingresando animales? (si/no)")
			respuesta=respuesta.toLowerCase();
		}
	}
	//promedio=sumapeso/contador
}
