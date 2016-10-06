function respuesta() {

    var selected = document.getElementById("2").checked;
    if (selected) {
        var text = document.createTextNode("Correcto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("correcto");
    } else {
        var text = document.createTextNode("Incorrecto");
        document.getElementById("resultado").appendChild(text);
        document.getElementById("resultado").classList.add("incorrecto");
    }
    var elements = document.getElementsByClassName("radio");
    
    for (var i = 0; i < elements.length; ++i) {
        elements[i].disabled = true;
    }


}