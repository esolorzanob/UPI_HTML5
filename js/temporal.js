function convertir () {           
  
    var checked = document.getElementById('masc').checked;
    var checked2 = document.getElementById('fem').checked;
    
    var genero2 = "";
    if(checked){
        genero2 = "Masculino";
    } else if (checked2){
        genero2 = "Femenino";
    }else{
        genero2 = "Otro";
    }     
    
    var persona = {
               
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellidos').value,
        telefono: document.getElementById('tel').value,
        correo: document.getElementById('correo').value,
        direccion: document.getElementById('direccion').value,
        genero: genero2,
        edad: document.getElementById('edad').value,
        fecha: document.getElementById('fecha').value4
       
    };
   
    document.getElementById('monitor').value = JSON.stringify(persona, null, 4);
    sessionStorage.setItem("persona1", JSON.stringify(persona)); 
    return false;      
}


function mostrar () {
    var persona = sessionStorage.getItem("persona1");
     persona = JSON.parse(persona);
     document.getElementById("nombre").value = persona.nombre;
     document.getElementById("apellidos").value = persona.apellidos;
     document.getElementById("tel").value = persona.telefono;
     document.getElementById("email").value = persona.correo;
}

function escribir() {
    var nombre = "Juan";
    var apellido = "Perez";
    document.getElementById('monitor').value = "mi nombre es " + nombre + "\nMi apellido es " + apellido;
}



