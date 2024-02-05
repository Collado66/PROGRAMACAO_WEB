function funcao() {
    var nome = emprestimo.nome_cliente.value;

    var endereco = emprestimo.endereco.value;

    var telefone = emprestimo.telefone.value;
    // telefone = parseInt(telefone);

    var celular = emprestimo.celular.value;
    // celular = parseInt(celular);

    var email = emprestimo.email.value;

    var data_parcela = emprestimo.data_parcela.value;

    var valor_emprestimo = emprestimo.valor_emprestimo.value;
    valor_emprestimo = parseFloat(valor_emprestimo).toFixed(2); //duas casas decimais após a virgula

    var quantidade_parcela = emprestimo.quantidade_parcela.value;
    quantidade_parcela = parseInt(quantidade_parcela);

    /*Retorno*/
    
    emprestimo.retorno.value = nome + '\n';
    emprestimo.retorno.value += endereco + '\n';
    emprestimo.retorno.value += telefone + '\n';
    emprestimo.retorno.value += celular + '\n';
    emprestimo.retorno.value += email + '\n';


    /*emprestimo*/

    var valor_parcela = parseFloat(valor_emprestimo / quantidade_parcela).toFixed(2);
    var contador = 1;
    var juros = 1.1;

    var time = new Date(emprestimo.data_parcela.value + " 00:00"); //pega a data digitada e adiciona a hora para depois adicionar os dias
    var outraData = new Date(); //outra data serão as próximas datas da parcela

    emprestimo.retorno.value += "O valor de parcela é: " + (valor_parcela * juros).toFixed(2) + " com juros de 10 %" +  '\n';

    while (contador <= quantidade_parcela) {
        var valor_pago = valor_parcela * contador;

        if (contador == 1) { //ele deixa a data que foi digitada 
            outraData = time;
        } else {
            outraData.setDate(time.getDate() + 30); // se não for ele adiciona 30 dias 
        }
        emprestimo.retorno.value += contador + "ª parcela - "  + outraData.toLocaleDateString() +
        "  R$ "+ (valor_parcela * juros).toFixed(2) + " - " + 
        "  Total pago:   R$ " + (valor_pago * juros).toFixed(2) + '\n';
        contador++;
    }

    //toLocaleDateString pega a data que estava assim SUN 8 SEP 2019  e transforma para 8/09/2019

}


