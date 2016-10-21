//Función que al presionar el botón agregar lista da inputs
function agregarLista () {
	//para crear el input
	var input = document.createElement("input");
	//para decir en donde tiene que poner el input
	var inputValue = document.getElementById("inputLista").value;
	//para que aparezca el input en la pantalla
	inputLista.appendChild(input);
}