/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultado=(numeroUno+numeroDos);

	alert("La suma es "+resultado);
/*para que el parseInt funcione, ambos tienen que ser numeros, es decir, estar parseados
hay formas de poder hacer en una sola linea varias "operaciones", no es requerido, pero depende
de cada uno, mientras este separado y funcione, esta bien, no poder separar algo que esta todo junto, esta mal*/
}

