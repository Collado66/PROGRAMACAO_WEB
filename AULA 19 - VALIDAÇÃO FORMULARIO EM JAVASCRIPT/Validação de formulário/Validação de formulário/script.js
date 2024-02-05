function $(id){
    return
    document.getElementById(id);
}

function vp(id)
{if($(id).value == " "){
    return false;
}else{
    return true;
    }
}


function ve(id)
{if($(email).value.indexOf ("@") < 1 || $(email).value.indexOf(".")== -1){
    return false}else{
        return true;
    }
}

function vc()
{ var cpf = document.getElementById('cpf').value.replace(/[^\d]/g, '');



    if (cpf.length !== 11) {

    alert('CPF inválido. Por favor, insira um CPF válido.');
    return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {


    soma += parseInt(cpf.charAt(i)) * (10 - i);

    }
    let resto = 11 - (soma % 11);
    let digito1 = (resto === 10 || resto === 11) ? 0 : resto;

    if (digito1 !== parseInt(cpf.charAt(9))) {
    alert('CPF inválido. Por favor, insira um CPF válido.');

    return false;

    }


    soma = 0;
    for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = (resto === 10 || resto === 11) ? 0 : resto;


    if (digito2 !== parseInt(cpf.charAt(10))) {

    alert('CPF inválido. Por favor, insira um CPF válido.');

    return false;
    }

    return true;




}
