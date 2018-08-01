/*
ingreso:
maria	f  	15
jose  	m  	33
pepe	m 	81

mostrar:
	cantidad
		1_de mayores de edad: 2
		2_menores de edad: 1
		3_mujeres = 1
		4_cantidad de hombres=2
	nombre
		5_del mayor edad = pepe
		6_ del menor edad = maria
		7_del hombre de menor edad= jose
*/
function mostrar()
{
	var edad;
	var nombre;
	var sexo;
	var contador=0;
	var contadorMayoresDeEdad=0;
	var contadorMenoresDeEdad=0;
	var contadorSexoF=0;
	var contadorSexoM=0;
	var menorEdad=0;
	var nombreMenorEdad;
	var mayorEdad=0;
	var nombreMayorEdad;
	while(contador<3)
	{
		contador++;
		nombre=prompt("ingrese su Nombre");
		sexo=prompt("Ingrese su Sexo (f/m)");
		while(sexo != "f" && sexo != "m")
			{
				sexo=prompt("Error, ingrese su sexo (f/m)")
			}
		edad=prompt("Ingrese su Edad");
		edad=parseInt(edad);
		while(edad<0 || edad >100)
		{
			edad=prompt("Ingrese su Edad");
			edad=parseInt(edad);
		}
		if(edad>18)
		{
			contadorMayoresDeEdad++;
		}else
		{
			contadorMenoresDeEdad++;
		}
		if(sexo=="f")
		{
			contadorSexoF++;
		}else
		{
			contadorSexoM++;
		}
		if(edad>mayorEdad)
		{
			mayorEdad=edad;
			nombreMayorEdad=nombre;
		}
		if(edad>menorEdad)
		{
			menorEdad=edad;
			nombreMenorEdad=nombre;
		}
	}

	document.write(" <br> la cantidad de menores es: "+contadorMenoresDeEdad);
	document.write(" <br> la cantidad de mayores es: "+contadorMayoresDeEdad);
	document.write(" <br> la cantidad de hombres es: "+contadorSexoM);
	document.write(" <br> la cantidad de mujeres es: "+contadorSexoF);
	document.write(" <br> el nombre del de mayor edad es:"+nombreMayorEdad);
	document.write(" <br> el nombre del de menor edad es:"+nombreMenorEdad);

}
