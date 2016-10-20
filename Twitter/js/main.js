	/*no pude conectar el checkbox con que se subrayara la tarea, pero si se hacen por separado
	si presionas sobre la tarea que agregaste si se subraya*/
	
	// crear un tache que elimine las tareas
	var quitaTarea = document.getElementsByTagName("LI");
	var i;
	for (i = 0; i < quitaTarea.length; i++) {
		var span = document.createElement("SPAN");
	  	var txt = document.createTextNode("\u00D7");
	  	span.className = "close";
	  	span.appendChild(txt);
	  	q[i].appendChild(span);
	}
	//lo que hace que se subraye el texto
	var list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	}, false);
	// Función para crear nuevas tareas
	function agregarTarea() {
		//para hacer el checkbox 
	 	var box=document.createElement("input");
		box.type="checkbox";
		//para hacer el li en donde va a escribirse la tarea
	  	var li = document.createElement("li");
	  	var inputValue = document.getElementById("escribirTarea").value;
	  	//para que se escriba el texto
	  	var t = document.createTextNode(inputValue);
	  	//para que primero se ponga el check-box
		li.appendChild(box);
		//para que se ponga el texto que se ingresa en el textarea
		li.appendChild(t);
		//para que no te deje agregar nada si no escribiste en el textarea
	  	if (inputValue === '') {
	    	alert("No has ingresado ninguna tarea");
	  	} else {
	    	document.getElementById("listaDeTareas").appendChild(li);
	  	}
	  	document.getElementById("escribirTarea").value = "";
		//tache para quitar tareas
	  	var span = document.createElement("SPAN");
	  	var txt = document.createTextNode("\u00D7");
	  	span.className = "close";
	  	span.appendChild(txt);
	  	li.appendChild(span);
	  	for (i = 0; i < close.length; i++) {
	    	close[i].onclick = function() {
	      		var div = this.parentElement;
	      		div.style.display = "none";
	    	}
		}
	}
	//lo que borra tareas de la lista
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
	  	close[i].onclick = function() {
	    	var div = this.parentElement;
	    	div.style.display = "none";
	  	}
	}