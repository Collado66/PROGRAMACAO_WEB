function imagem_escolhida()
{
	var imagem_escolhida = document.getElementById("opcao_selecionada").value;
	imagem_escolhida = parseInt(imagem_escolhida);
	
	if(imagem_escolhida == 1){
		
		document.getElementById("div_img1").style.display = 'block';
        document.getElementById("div_img2").style.display = 'block';
        document.getElementById("div_img3").style.display = 'block';
		
	}
	
	
	if(imagem_escolhida == 2){
		
		document.getElementById("div_img1").style.display = 'block';
        document.getElementById("div_img2").style.display = 'none';
        document.getElementById("div_img3").style.display = 'none';
		
	}
	
	if(imagem_escolhida == 3){
		
		document.getElementById("div_img1").style.display = 'none';
        document.getElementById("div_img2").style.display = 'block';
        document.getElementById("div_img3").style.display = 'none';
		
	}
	
	if(imagem_escolhida == 4){
		
		document.getElementById("div_img1").style.display = 'none';
        document.getElementById("div_img2").style.display = 'none';
        document.getElementById("div_img3").style.display = 'block';
		
	}
}
