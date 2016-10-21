//Función que al presionar el botón agregar lista da inputs
function agregarLista () {
	//para crear el input
	var input = document.createElement("input");
	//para decir en donde tiene que poner el input
	var inputValue = document.getElementById("inputLista").value;
		//Debo crear un id para el input pero no se como :(
	//para que aparezca el input en la pantalla
		inputLista.appendChild(input);
	//para crear el boton de agregar nombre de la lista
	var boton = document.createElement("button");
	//para agregar el texto del boton
	var texto = document.createTextNode("Agregar nombre de la lista");
	//para darle una clase al boton y poder hacer que abajo se envie el nombre
	 	boton.className = "submit";
	//crea el texto del boton
	  	boton.appendChild(texto);
	//crea el boton
	  	inputLista.appendChild(boton);
	//function 
}