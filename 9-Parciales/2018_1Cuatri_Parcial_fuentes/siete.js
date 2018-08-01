function mostrar()
{
	var nota;
	var sexo;
	var edad;
	var contador=0;
	var acumulador=0;
	var promedioNotas;
	var notaMasBaja;
	var sexoNotaMasBaja;
    var bandera=0;
    var contadorHombresAprobados=0;

	while(contador<5)
	{
		contador++;
		nota=prompt("Ingrese la nota #"+contador);
		nota=parseInt(nota);
		while(nota < 0 || nota > 10)
			{
				nota=prompt("Error, Ingrese la nota #"+contador);
			}
		

		acumulador=nota+acumulador;
		
		sexo= prompt("Ingrese su sexo (f/m)");
		while(sexo != "f" && sexo != "m")
		{
			alert("error, ingrese su sexo (f/m)");
		}	

		if(nota<notaMasBaja || bandera==0)
		{
			notaMasBaja=nota;
			sexoNotaMasBaja=sexo;
            bandera=1
		}
		if(sexo =='m' && nota>=6)
        {
            contadorHombresAprobados++;
        }
		promedioNotas=acumulador/contador


	}
	alert("El promedio total de las notas "+promedioNotas+"\nLa nota mas baja es "+notaMasBaja+" y su sexo es: "+sexoNotaMasBaja+"\nLa cantidad de varones apobados es: "+contadorHombresAprobados);

}
        /*edad=prompt("Ingrese su Edad");
        edad=parseInt(edad);
        while(edad<0 || edad >100)
        {
            edad=prompt("Error, Ingrese su Edad");
            edad=parseInt(edad);
        }*/
