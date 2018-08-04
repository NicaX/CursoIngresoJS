/*Realizar el algoritmo que tome por ID tres datos: precio1, precio2 y precio3
 de una compra y luego que muestre la suma y el promedio de los precios.*/

function Mostrar()
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;

	precio1=document.getElementById('precioUno').value;
	precio2=document.getElementById('precioDos').value;
	precio3=document.getElementById('precioTres').value;

	precio1=parseInt(precio1);
	precio2=parseInt(precio2);
	precio3=parseInt(precio3);

	suma=precio1+precio2+precio3
	promedio=suma/3

	alert("La suma total es de :"+suma+" Y el promedio es: "+promedio);
	//document.write("La suma total es de :"+suma+" Y el promedio es: "+promedio);


}
