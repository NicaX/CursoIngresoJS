function Mostrar()
{
	var mes;
	mes=prompt("Ingrese un mes");
	mes.toLowerCase(mes);

	switch(mes)
	{
		case "diciembre":
			alert("Se vienen las Fiestas");
			break;
		case "enero":
			alert("Comienza el Año");
			break;
		default:
			alert("No es Enero ni diciembre");
			break;
	}

}
