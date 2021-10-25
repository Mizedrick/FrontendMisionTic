function validaesVacio(dato) {
    return !dato.trim().length;
}

/**
 * Al ingresar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validar() {    
    let startDate = $("#startDate").val();
    let devolutionDate = $("#devolutionDate").val();
    let client = $("#client").val();
    let bike = $("#bike").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(startDate)) {
        errores = "Debe seleccionar la fecha de inicio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDate").focus();
        return false;
    }else if (validaesVacio(devolutionDate)) {
        errores = "Debe seleccionar la fecha de final<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#devolutionDate").focus();
        return false;
    }else if (validaesVacio(client)) {
        errores = "Debe seleccionar un cliente<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#client").focus();
        return false;
    } else if (validaesVacio(bike)) {
        errores = "Debe seleccionar una bicicleta<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#bike").focus();
        return false;
    } else if (startDate>devolutionDate) {
        errores = "La fecha inicial debe ser anterior a fecha final<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDate").focus();
        return false;
    }else {
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

/**
 * Al actualizar un nuevo registro:
 * 
 * Ejecuta validaciones campo a campo
 */
function validarEditar() {
    //obtiene valores
    let idReservation = $("#idEdit").val();
    let startDate = $("#startDateEdit").val();
    let devolutionDate = $("#devolutionDateEdit").val();
    let status = $("#statusEdit").val();
    let errores = "";
    $("#mensajes").html("");

    //valida que los campos no sean vacios
    if (validaesVacio(startDate)) {
        errores = "Debe seleccionar la fecha de inicio<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDate").focus();
        return false;
    }else if (validaesVacio(status)) {
        errores = "Debe seleccionar el status de la reserva<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDate").focus();
        return false;
    }else if (validaesVacio(devolutionDate)) {
        errores = "Debe seleccionar la fecha de final<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#devolutionDate").focus();
        return false;
    }else if (startDate>devolutionDate) {
        errores = "La fecha inicial debe ser anterior a fecha final<br>";
        $("#mensajes").html(errores);
        $("#mensajes").show(500);
        $("#startDate").focus();
        return false;
    } else {
        $("#mensajes").html("");
        $("#mensajes").hide(500);
        return true;
    }

    return true;
}

function upperCaseF(campo) {
    setTimeout(function () {
        campo.value = campo.value.toUpperCase();
    }, 1);
}