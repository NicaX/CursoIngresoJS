/*
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".
*/
function mostrar()
{
	var numero1;
	var numero2;
	var division;
	var suma; 

	numero1=prompt("ingrese el numero 1");
	numero1=parseInt(numero1);

	numero2=prompt("ingrese el numero 2");
	numero2=parseInt(numero2);


	division=numero1/numero2;

	suma=numero1+numero2;

	if(numero1==numero2)
	{
		alert(numero1 + numero2);

	}
	if(numero1>numero2)
	{
		
		alert(division)
	}
	else if(suma>50)
	{
		alert(suma)
	
	}

	else
	{
		alert("La suma es "+suma+" Y es menor a 50");
	}
}
