
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

