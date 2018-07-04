/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);

	resultado=(sueldo*1.10);
	resultado=parseInt(document.getElementById('resultado').value=resultado);

	//puede realizarse tambien usando 3 variables, siendo la 3ra  para el 10%
}
