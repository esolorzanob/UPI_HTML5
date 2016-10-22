var convertir = function () {
    if(checked){
        var genero = "Masculino";
    }else if (checked){
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



