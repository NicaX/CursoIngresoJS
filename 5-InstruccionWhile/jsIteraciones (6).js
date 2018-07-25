function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	

	
	while(contador<5)
	{
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador=numero+acumulador;
		contador++;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
/*tambien se puede con una variable "promedio" y dividiendola despues del while, tomandola
como dato para el document*/
}//FIN DE LA FUNCIÓN