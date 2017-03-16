var respuestas = [1];
function respuesta(number) {
	var hijos = document.getElementById("resultado").childNodes;
	if (hijos.length > 0){
		document.getElementById("resultado").removeChild(hijos[0]);
	}
	    
	var contador = 0;
	var elements = document.getElementsByClassName("radio");
	console.log(elements);
	for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
			contador++;
		}
    }
	var selected = elements[respuestas[number]].checked;
	
	if(contador == 0){
		 var text = document.createTextNode("Por favor escoja una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
	}else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").appendChild(text);
		document.getElementById("resultado").classList.remove("incorrecto");
        document.getElementById("resultado").classList.add("correcto");
    } else {
        var text = document.createTextNode("Incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
	
    if (contador > 0){
		
		for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
		}	
		document.getElementById("button").disabled = true;	
	}
    
	


}