function calcular_idade()
{
	var nome_pessoa_digitado, idade_pessoa_digitada;
	var idade_avaliada = 18;

	nome_pessoa_digitado = formulario_idade_pessoa.nome_digitado.value;
	idade_pessoa_digitada = formulario_idade_pessoa.idade_digitada.value;

	idade_pessoa_digitada = parseInt(idade_pessoa_digitada);

	if (idade_pessoa_digitada >= idade_avaliada) {

		formulario_idade_pessoa.nome_pessoa.value = nome_pessoa_digitado;
		formulario_idade_pessoa.idade_pessoa.value = idade_pessoa_digitada;
		formulario_idade_pessoa.situacao_pessoa.value = "Você é maior de idade.";

	}	
	else 
	{
		formulario_idade_pessoa.nome_pessoa.value = nome_pessoa_digitado;
		formulario_idade_pessoa.idade_pessoa.value = idade_pessoa_digitada;
		formulario_idade_pessoa.situacao_pessoa.value = "Você é menor de idade.";
	}
}
