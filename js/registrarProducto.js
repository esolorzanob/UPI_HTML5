var productos = [];

function registrar() {
    var producto = {
        nombre: document.getElementById('nombre').value,
        precio: document.getElementById('precio').value,
        categoria: document.getElementById('categoria').value,
        marca: document.getElementById('marca').value
    }
    productos.push(producto);
    var inputs = document.getElementsByClassName('propiedad');
    for (var i =0; i<inputs.length; i++){
        inputs[i].value = "";
    }
    alert(JSON.stringify(productos));
    return false;
}

function guardar() {
    window.sessionStorage.setItem("productos", JSON.stringify(productos));
    alert("Los productos se han registrado con éxito!");
    document.getElementById('monitor').value = JSON.stringify(productos, null, 4);
}