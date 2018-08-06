/*Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores e un solo alert 
4-Y solo el precio con descuento más el IVA por id .*/
function mostrar()
{
	var precio;
	var descuento;
	var porcentaje;
	var totalDescuento;
	var precioDescontado;
	var precioFinal;
	var iva;
	var precioIva;

	precio=prompt("Ingrese precio");
	precio=parseInt(precio);

	descuento=prompt("Ingrese el % de descuento");
	descuento=parseInt(descuento);

	porcentaje=descuento/100;
	totalDescuento=precio*porcentaje;

	precioFinal=precio-totalDescuento;
	iva=precioFinal*0.21;
	precioIva=precioFinal+iva
	//precio=precioFinal+precioIva

	alert("su descuento es de "+totalDescuento+" Su total a pagar es de "+precioFinal+" Y se le agrego "+iva+" de iva")
	
	document.getElementById('elPrecioFinal').value=precioIva
}
