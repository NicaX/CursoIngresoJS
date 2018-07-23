function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
 

switch(mesDelAño)
	{
		case "Enero":
		case  "Febrero":
		case "Marzo":
		case "Abril":
		case  "Mayo":
		case "Junio":
			alert("Falta para el Invierno");
			break;
		case "Julio":
		case  "Agosto":
			alert("Abrigate que hay alta rosca");
			break;
/*el default, es como el else, basicamente xdxd ejecuta todos los meses(casos)restantes, 
como el usuario no tiene que ingresar nada, la condicion de deja tal como está*/
		default:
			alert("Ya pasamos el frio, ahora calor!");
			break;
	}




}//FIN DE LA FUNCIÓN