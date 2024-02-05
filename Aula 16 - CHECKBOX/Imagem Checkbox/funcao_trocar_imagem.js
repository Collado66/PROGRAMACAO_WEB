function imagem_escolhida()
{
    document.getElementById("div_img1").style.display = 'none';
    document.getElementById("div_img2").style.display = 'none';
    document.getElementById("div_img3").style.display = 'none';

    if(document.getElementById("img_selecionada_todas").checked == true)
    {
        document.getElementById("div_img1").style.display = 'block';
        document.getElementById("div_img2").style.display = 'block';
        document.getElementById("div_img3").style.display = 'block';
    }

    if(document.getElementById("img_selecionada_1").checked == true)
    {
        document.getElementById("div_img1").style.display = 'block';
    }

    if(document.getElementById("img_selecionada_2").checked == true)
    {
        document.getElementById("div_img2").style.display = 'block';
    }

    if(document.getElementById("img_selecionada_3").checked == true)
    {
        document.getElementById("div_img3").style.display = 'block';
    }
}