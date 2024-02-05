function $(id) {
    return document.getElementById(id);
}

function vldrPreenchimento(id){
	   return $(id).value !== "";
}

function vldcpf(id){
	var cpf = $(id).value;

	if ( cpf.length !== 14){
		return false;
	}

	if (cpf.charAt(3) !== "." || cpf.charAt(7) !== "." || cpf.charAt(11) !=="-"){
		return false;
	}

	for (var i=0; i< cpf.length ; i++){
		if (i !== 3 && i !== 7 && i !==11 && cpf.charAt(i)<'0' || cpf.charAt(i)>'9'){
		return false;
		}
	}
        return true;
}


function vldrFormulario(){

var mensagem= "";

if(!vldrPreenchimento("txCpf")) {
	mensagem += "É obrigatório que preencha seu cpf!";	
} else {		
if(!vldcpf("txCpf")){
	mensagem +="É obrigatório que o cpf esteja no formato correto!";
 }
}

if (mensagem !== "") {
	window.alert(mensagem);
}
else {window.alert("Enviado com sucesso!")}

}

window.onload = function () {
    $("enviar").onclick = function () {
        vldrFormulario();
    }
}