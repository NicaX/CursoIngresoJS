function mostrar()
{
	var nota;
	var sexo;
	var edad;
	var contador=0;
	var acumulador=0;
	var promedioNotas;
	var notaMasBaja=0;
	var sexoNotaMasBaja;

	while(contador<2)
	{
		contador++;
		nota=prompt("Ingrese la nota #"+contador);
		nota=parseInt(nota);
		while(nota < 0 || nota > 10)
			{
				nota=prompt("Error, Ingrese la nota #"+contador);
			}
		
		/*edad=prompt("Ingrese su Edad");
		edad=parseInt(edad);
		while(edad<0 || edad >100)
		{
			edad=prompt("Error, Ingrese su Edad");
			edad=parseInt(edad);
		}*/

		acumulador=nota+acumulador;
		
		sexo= prompt("Ingrese su sexo (f/m)");
		while(sexo != "f" && sexo != "m")
		{
			alert("error, ingrese su sexo (f/m)");
		}	

		if(nota<notaMasBaja)
		{
			notaMasBaja=nota+notaMasBaja;
			sexoNotaMasBaja=sexo;
		}
		
		promedioNotas=acumulador/contador


	}
	alert("El promedio total de las notas"+promedioNotas+" Y la nota mas baja es "+notaMasBaja+" y su sexo es: "+sexoNotaMasBaja);

}
 /*function mostrar()
{
var nombre;
var edad;
var sexo;
var cantidadDeMayores= 0;
var cantidadDeMenores =0;
var cantidadDeHombresMayores = 0;
var cantidadDeHombres= 0;
var cantidadDeMujeres= 0;
var respuesta = "si";
var contador = 0;
var mayor;
var menor;
var promedioEdadMujeres;
var promedioEdadHombres;
var promedioTotal;
var edadHombres=0;
var edadMujeres=0;
var masViejo;
var masJoven;

    while (contador <4)
     {
    	contador ++;

    	nombre = prompt ("Ingrese su nombre");

    	sexo = prompt ("Ingrese su sexo (f/m)");
   		 sexo = sexo.toLowerCase(); 
        while (sexo != "f" && sexo != "m")
         {
            sexo = prompt ("Ingrese su sexo (f/m)");
            sexo = sexo.toLowerCase();   
         }

    	edad= prompt ("Ingrese una edad valida");
    	edad= parseInt(edad);
    	
    	 if (contador == 1) 
    	 {
        	mayor= edad;
       		menor= edad;
    	 }

     	if (edad > mayor)
     	{
        	mayor= edad;
          	masViejo= nombre;
    	}
    else if (edad < menor){
        menor = edad;
        masJoven = nombre;
    }
    while (edad >100 || edad < 1 || isNaN(edad)) {
        edad= prompt ("Ingrese una edad valida");
        edad= parseInt(edad);
         if (contador == 1) {
            mayor= edad;
            menor= edad;
         }
         if (edad > mayor){
        mayor= edad;
        masViejo= nombre; 
    }
        else if (edad < menor){
        menor = edad;
        masJoven = nombre;
    }

}


    if (edad > 18) {
        cantidadDeMayores++;
}   else {
        cantidadDeMenores++;
}
    if (sexo == "f") {
        cantidadDeMujeres++;
        edadMujeres= edadMujeres + edad;
}   else {
        cantidadDeHombres++;
        edadHombres= edadHombres + edad;
    if (sexo == "m" && edad >=18) {
        cantidadDeHombresMayores ++;
            }
        }
    }
promedioTotal= (edadHombres+edadMujeres) / (cantidadDeHombres+cantidadDeMujeres);
promedioEdadHombres=edadHombres/cantidadDeHombres;
promedioEdadMujeres=edadMujeres/cantidadDeMujeres;
         
    
    document.write ("<h3>Cantidad de hombres: </h3>" + cantidadDeHombres+ "<br>");
    document.write ("<h3>Cantidad de mujeres: </h3>" + cantidadDeMujeres+ "<br>");
    document.write ("<h3>Cantidad de mayores: </h3>"+ cantidadDeMayores+ "<br>"); 
    document.write("<h3>Cantidad de menores: </h3>"+ cantidadDeMenores+ "<br>");
    document.write("<h3>Cantidad de hombres mayores: </h3>"+ cantidadDeHombresMayores+ "<br>");
    document.write("<h3>La edad mayor es: </h3>"+ mayor + "<br>");
    document.write("<h3>La edad menor es: </h3>"+ menor + "<br>");
    document.write("<h3>Promedio de edad de mujeres: </h3>"+ promedioEdadMujeres+"<br>");
    document.write("<h3>Promedio de edad de hombres: </h3>"+ promedioEdadHombres + "<br>");
    document.write("<h3>Promedio total de edades: </h3>"+ promedioTotal + "<br>");
    document.write("<h3>Persona mas vieja: </h3>"+ masViejo + "<br>");
    document.write("<h3>Persona mas joven: </h3>"+ masJoven + "<br>");
*/