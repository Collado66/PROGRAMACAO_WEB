function calcular_tabuada(){
    var tabuada_dg;
    var texto_tabuada = "";
    var contador = 0;

    tabuada_dg = formulario_tabuada.tabuada_digitada.value;
    tabuada_dg = parseInt(tabuada_dg);

    while( contador <= 10){
        texto_tabuada = texto_tabuada + tabuada_dg + " X " + contador + " = " + (tabuada_dg*contador)+ "\n";
        contador++;
    }

    formulario_tabuada.texto_retorno_tabuada.value = texto_tabuada;
}