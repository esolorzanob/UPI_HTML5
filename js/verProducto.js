
var total = 0;
var contador = 0;
var productos = window.sessionStorage.getItem('productos');
productos = JSON.parse(productos);

window.onload = function () {
    
	
	for (var i = 0; i < productos.length; i++) {
		//crear contenedor de cada producto
		var producto = document.createElement('div');
		producto.classList.add("producto");
		//crear propiedad de nombre
		var parrafoNombre = document.createElement('p');
		var nombre = document.createTextNode(productos[i].nombre);
		parrafoNombre.appendChild(nombre);
		producto.appendChild(parrafoNombre);
		
		//crear propiedad de marca
		var parrafoMarca = document.createElement('p');
		var marca = document.createTextNode(productos[i].marca);
		parrafoMarca.appendChild(marca);
		producto.appendChild(parrafoMarca);
		
		//crear propiedad de categoria
		var parrafoCategoria = document.createElement('p');
		var categoria = document.createTextNode(productos[i].categoria);
		parrafoCategoria.appendChild(categoria);
		producto.appendChild(parrafoCategoria);
		
		//crear propiedad de precio
		var parrafoPrecio = document.createElement('p');
		var precio = document.createTextNode(productos[i].precio);
		parrafoPrecio.appendChild(precio);
		producto.appendChild(parrafoPrecio);
		parrafoPrecio.setAttribute("numero", "1");
		
		
		var boton = document.createElement('button');
		boton.innerHTML = "Agregar a carrito";
		boton.id = contador.toString();
		boton.onclick = function () {			
			var precio = productos[this.id].precio;			
			total += parseInt(precio);
			alert("total en carrito = " + total);
		};

		producto.appendChild(boton);
		
		//agregar el div de producto en el contenedor
		var div = document.getElementById('productoContainer');
		div.insertBefore(producto, div.childNodes[i]);
		contador++;
	}


}

