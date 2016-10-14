
var dateCheck = function () {
    var fecha = new Date(document.getElementById('fecha').value);
    var anno = fecha.getFullYear();
    var fechaActual = new Date();
    var annoActual = fechaActual.getFullYear();
    var edad = annoActual - anno;
    if(edad != document.getElementById('edad').value ){
        alert("Su edad y fecha de nacimiento no coinciden");
    }
    
};

var pruebaJS = function () {
    alert("Los datos se guardaron con éxito");
};


var convertir = function () {
    if(document.getElementById('masc').checked){
        var genero = "Masculino";
    }else if (document.getElementById('fem').checked){
        var genero = "Femenino";
    }else{
        var genero = "Otro";
    }
    var persona = {
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        telefono: document.getElementById('tel').value,
        correo: document.getElementById('correo').value,
        direccion: document.getElementById('direccion').value,
        genero: genero,
        edad: document.getElementById('edad').value,
        fecha: document.getElementById('fecha').value
    }
    document.getElementById('monitor').value = JSON.stringify(persona, null, 4);
    return false;
}
