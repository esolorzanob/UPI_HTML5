


var test = function(){  
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	var resultado = num1 * num2;
    var todo = {
		numero1: num1,
		numero2: num2,
		resultado: resultado
	};
	document.getElementById("monitor").value += "\n" + JSON.stringify(todo);	
}

