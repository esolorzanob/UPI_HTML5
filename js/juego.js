function respuesta() {
	var hijos = document.getElementById("resultado").childNodes;
	if (hijos.length > 0){
		document.getElementById("resultado").removeChild(hijos[0]);
	}
	
    var selected = document.getElementById("2").checked;
	var contador = 0;
	var elements = document.getElementsByClassName("radio");
	for (var i = 0; i < elements.length; ++i) {
        if(elements[i].checked){
			contador++;
		}
    }
	if(contador == 0){
		 var text = document.createTextNode("Por favor escoja una respuesta");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
	}else if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").appendChild(text);
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