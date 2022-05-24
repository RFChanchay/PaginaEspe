
function validarCorreo(){
	var email= document.getElementById("txtEmail").value;
	var expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	if(!expresion.test(email)){
		alert("El correo no es válido");
		return false;
	}
	else{
		alert("Correo válido");
		document.getElementById("txtEmail").disabled = true;
		document.getElementById("txtFecha").disabled = false;
		document.getElementById("txtTelefono").disabled = false;
		document.getElementById("btnEnviar").disabled = false;
		return true;
	}
}
function validar() {
	var correo,telefono,expresion;
	correo= document.getElementById("txtEmail").value;
	telefono= document.getElementById("txtTelefono").value;
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	var ventana_secundaria;
	// body...
	
	/*if(checkSubmit()){
		alert("Script checkSubmit() ejecutado correctamente");
	}
	else{
		alert("Script checkSubmit() No se ejecuto correctamente");
	}*/
	
	//Teléfono
	if(telefono.length!=10){
		alert("El telefono no es correcto");
		return false;
	}
	else if(isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}
	else{
		alert("Datos ingresados correctamente");
		if (checkSubmit()){
			alert("Ejecutado checkSubmit() correctamente....");
			
			window.open('FormContactoEnviado.html');
			return true;
		}else{
			alert("Script checkSubmit() No se ejecuto correctamente");
			return true;
		}
	}	
}

function checkSubmit() {
    document.getElementById("btnEnviar").value = "Enviado los datos correctamente";
    document.getElementById("btnEnviar").disabled = true;
    window.close();
    return true;
    

    //EJECUTAR CONTACTO (invocar al archivo.html en js)
    /*window.open('FormContactoEnviado.html');*/
    /*window.close();*/

}


/*function isNaN(dato){
	for (bandera=true,i=0; i<= dato.length(); i++){
		if (isdigit((char)dato[i]))
			continue
		else{
			bandera = false;
			break;
		}
	}
	return (!bandera);
}*/
