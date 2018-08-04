function Mostrar()
{
	var edad;
	var sexo;
	var i;
	var suma=0;
	var promedio;
	var min;
	var flag=0
	var cantVarones;

	for(i=0; i<100; i++)
	{
		edad=prompt("ingrese la edad");
		edad= parseInt(edad)
		while(edad<=0 || edad>100)
		{
			edad=prompt("Reingrese la edad");
			edad=parseInt(edad);
		}	

		sexo=prompt("ingrese sexo");
		
		while(sexo != "f" && sexo != "m")
		{
			sexo=prompt("Reingrese Sexo")
		}

/*a*/	suma=suma + edad

/*b*/	if(flag==0 || edad<minimo)
		{
			minimo=edad
		}
		flag=1

/*c*/	if(sexo=="m" && edad >=20)
		{
			cantVarones++
		}
	}
	promedio=suma/100
	alert("el promedio es "+promedio)
	alert(" la minima edad es "+minimo);
	alert("la cantidad de varones es "+cantVarones);
	//no uso un while aca porque la repeticion ya la tengo en el for, no es necesario repetir el codigo si ya tengo uno repeticion mas arriba 

}
