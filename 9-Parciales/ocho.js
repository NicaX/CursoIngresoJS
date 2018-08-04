/*Realizar el algoritmo que permita ingresar números positivos (validar que sea 
positivo) hasta que el usuario quiera e informar al terminar el ingreso por
 document.write: 
 a) la cantidad de números pares. 
 b) el promedio de todos los números ingresados. 
 c) la suma de todos los números.
 d) El número máximo y el mínimo.

*/
function Mostrar()
{
	var numero
	var rta="s"
	var maximo
	var minimo
	var flag=0
	var suma
	var cantidadPares=0;
	var contadorIngreso;
	var promedio;

	while(rta=="s")
	{
		numero=prompt("ingrese el numero en kg");
		numero=parseFloat(numero);

		while(numero<=0)
		{
			numero=prompt("Error, ingrese el numero en kg")
			numero=parseFloat(numero);
		}

		if(numero%2==0)
			{
				cantidadPares++;
			}

	
		if(flag==0 || numero>maximo)
		{
			maximo=numero;
		}
		if(flag==0 || numero<maximo)
		{
			minimo=numero;
		}
		flag=1;
		suma=suma + numero;

		contadorIngreso++
		rta=prompt("Desea Continuar?")
	}
	document.write("Cantidad de pares: "+cantidadPares+ "<br>" );
	document.write("promedio: "+promedio+ "<br>");
	document.write("la suma es: "+suma+ "<br>");
	document.write("el maximo es "maximo+" y el minimo es: "+minimo);
}
