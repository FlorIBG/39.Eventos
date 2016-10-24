//Función que al presionar el botón agregar lista da inputs
function agregarLista () {
	//para crear el input
	var input = document.createElement("input");
		input.className = "guardarInput";
	//para decir en donde tiene que poner el input
	var contenedor = document.getElementById("inputLista");
		//Debo crear un id para el input pero no se como :(
	//para que aparezca el input en la pantalla
		inputLista.appendChild(input);
	//para crear el boton de agregar nombre de la lista
	var boton = document.createElement("button");
	//para agregar el texto del boton
	var texto = document.createTextNode("Guardar");
	//para darle una clase al boton y poder hacer que abajo se envie el nombre
	 	
	//crea el texto del boton
	  	boton.appendChild(texto);
	//crea el boton
	  	inputLista.appendChild(boton);
		boton.onclick = function () {
			var div = document.createElement("div"); //creo un elemento div
			var divValue = input.value; //guarda lo que hay en el input de arriba
			var titulo = document.createTextNode(divValue); //
			div.appendChild(titulo);
			var btnAnadirLista = document.createElement("button");
			var textobtnAnadirLista = document.createTextNode("Añadir Lista");
			var segundoBoton = document.createElement("button");
			var textoSegundoBoton = document.createTextNode("Añadir una tarjeta");
			contenedor.appendChild(div);
			btnAnadirLista.appendChild(textobtnAnadirLista);
			contenedor.appendChild(btnAnadirLista);
			segundoBoton.appendChild(textoSegundoBoton);
			segundoBoton.className = "display";
			contenedor.appendChild(segundoBoton);
			btnAnadirLista.onclick = function () {
				var textarea = document.createElement("textarea");
				textarea.setAttribute("textarea","autofocus");
				contenedor.appendChild(textarea);
				var botonGuardar = document.createElement("button");
				var textoBotonGuardar = document.createTextNode("Guardar");
				botonGuardar.appendChild(textoBotonGuardar);
				contenedor.appendChild(botonGuardar);
			}
	}
}