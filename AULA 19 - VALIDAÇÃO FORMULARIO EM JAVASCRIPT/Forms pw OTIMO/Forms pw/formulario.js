function $(id) {
    return document.getElementById(id);
}

function validarPreenchimento(id) {
    return $(id).value !== "";
}

function validarEmail(id) {
    var email = $(id).value;
    return email.indexOf("@") >= 1 && email.indexOf(".") !== -1;
}
function validarCPF(id) {
    var cpf = $(id).value;

    // ve se o CPF tem 14 caracteres e possue o modelo  xxx.xxx.xxx-xx
    if (cpf.length !== 14) {
        return false;
    }

    // ver as posições dos . e do -
    if (cpf.charAt(3) !== '.' || cpf.charAt(7) !== '.' || cpf.charAt(11) !== '-') {
        return false;
    }

    // ve se os caracteres restantes são números
    for (var i = 0; i < cpf.length; i++) {
        if (i !== 3 && i !== 7 && i !== 11 && cpf.charAt(i) < '0' || cpf.charAt(i) > '9') {
            return false;
        }
    }

    return true;
}
function validarValorMin(id, tamanho) {
    return $(id).value.length >= tamanho;
}
function validarValorMax(id, tamanho) {
    return $(id).value.length <= tamanho;
}     
function validarForm() {
    var mensagem = "";
    if (!validarPreenchimento("txNome")) {
        mensagem = "O nome é obrigatório. \n ";
    } else {
        if (!validarValorMin("txNome", 6)) {
            mensagem += "O nome deve ter no mínimo 6 caracteres. \n ";
        } else if (!validarValorMax("txNome", 80)) {
            mensagem += "O nome deve ter no máximo 80 caracteres. \n ";
        }
    }
    if (!validarPreenchimento("txEmail")) {
        mensagem += "O e-mail é obrigatório. \n ";
    } else {
        if (!validarEmail("txEmail")) {
            mensagem += "Email Inexistente ou invalido. \n ";
        }
    }
    if (!validarPreenchimento("txCPF")) {
        mensagem += "O CPF é obrigatório. \n";
    } else {
        if (!validarCPF("txCPF")) {
            mensagem += "CPF inexistente ou Invalido. \n";
        }
    }
    if (mensagem !== "") {
        window.alert(mensagem);
    }
    else {window.alert("Enviado com sucesso.")}
}

window.onload = function () {
    $("enviar").onclick = function () {
        validarForm();
    }
}