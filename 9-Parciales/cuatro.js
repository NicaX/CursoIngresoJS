/*(IF) Realizar el algoritmo que pida dos números por prompt, lo sume e informe 
si el resultado de la suma “positivo”,” negativo” o “cero” por document.write.*/

function Mostrar()
{
	var numero1;
	var numero2;
	var suma

	numero1=prompt("Ingrese el primer número");
	numero2=prompt("Ingrese el segundo número");

	numero1=parseInt(numero1);
	numero2=parseInt(numero2);

	suma=numero1+numero2;

	if(suma == 0)
	{
		document.write("El resultado de la suma da 0");
	}
	else if(suma<0)
	{
		document.write("El resultado de la suma es negativo");
	}
	else
	{
		document.write("El resultado de la suma es positiva");
	}

/*	if(suma>0)
	{
		document.write("El resultado de la suma es positiva");
	}
	else 
	{
		if(suma<0)
		{
		document.write("El resultado de la suma es negativo");
		}
	
		else
		{
		document.write("El resultado de la suma da cero");
		}
	}
}
