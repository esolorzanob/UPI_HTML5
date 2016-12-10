window.onload = function(){
	var login = {
		"usuario": "esteban",
		pass: "123456"
	}
	var login2 = {
		usuario: "Juan",
		pass: "654321"
	}
	var login3 = {
		usuario: "Juan1",
		pass: "654321"
	}
	var login4 = {
		usuario: "Juan2",
		pass: "654321"
	}
	var users = [login, login2, login3, login4];
	
	
	
	sessionStorage.setItem("login", JSON.stringify(users));
}

function login(){
	var loginCorrecto = false;
	var login = sessionStorage.getItem('login');
	login = JSON.parse(login);
	var usuarioActual = document.getElementById('usuarioActual').value;
	var passActual = document.getElementById('passActual').value;
	for(var i =0; i < login.length; i++){
		if(usuarioActual == login[i].usuario){
			loginCorrecto = true;
			var usuarioCorrecto = login[i];
		}		
	}
	if (loginCorrecto == false){
		alert("Usuario Incorrecto");
	}else{
		if (usuarioCorrecto.pass != passActual){
			alert("Contraseña incorrecta");
		}else{
			alert("Login exitoso!");
			window.location.href = "registrarProducto.html";
		}
	}
	return false;
}