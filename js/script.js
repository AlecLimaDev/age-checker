const button = document.querySelector('button');

button.addEventListener('click', () => {
    let dataDeNascimento = new Date();
    let anoDeNascimento = dataDeNascimento.getFullYear();
    let campoNumero = document.getElementById('campoNumero');
    let resultadoDiv = document.querySelector('div#resultado');

    if (campoNumero.value.length == 0 || campoNumero.value > anoDeNascimento) {
        alert('[ERRO!] Verifique os dados e tente novamente!');
    } 
    
    else {   let escolhaOSexo = document.getElementsByName('escolha');
  
             let idadeDaPessoa = anoDeNascimento - Number(campoNumero.value);

             let generoDaPessoa = '';

             let imagem = document.createElement('img');

        imagem.setAttribute('id', 'foto');

        if (escolhaOSexo[0].checked) {

            generoDaPessoa = 'Homem'

            if (idadeDaPessoa >= 0 && idadeDaPessoa < 3) {
                imagem.setAttribute('src', './img/bebes-meninos.jpg');
                imagem.setAttribute('width', '400px')
            } 

            else if (idadeDaPessoa >= 3 && idadeDaPessoa < 12) {
                imagem.setAttribute('src', './img/criancas-meninos.jpg');
                imagem.setAttribute('width', '400px')
            }

             else if (idadeDaPessoa >= 12 && idadeDaPessoa < 18) {
                imagem.setAttribute('src', './img/adolescente-meninos.jpg')
                imagem.setAttribute('width', '400px')
            }

             else {
                imagem.setAttribute('src', './img/homem-adulto.jpg')
                imagem.setAttribute('width', '400px')
            }

        }
        
        if (escolhaOSexo[1].checked) {

            generoDaPessoa = 'Mulher'

            if (idadeDaPessoa >= 0 && idadeDaPessoa < 3) {
                imagem.setAttribute('src', './img/bebe-menina.jpg');
                imagem.setAttribute('width', '400px')
            } 

            else if (idadeDaPessoa >= 3 && idadeDaPessoa < 12) {
                imagem.setAttribute('src', './img/crianca-menina.jpg');
                imagem.setAttribute('width', '400px')
            } 

            else if (idadeDaPessoa >= 12 && idadeDaPessoa < 18) {
                imagem.setAttribute('src', './img/adolescente-menina.jpg')
                imagem.setAttribute('width', '400px')
            }

            else {
                imagem.setAttribute('src', './img/mulher-adulta.jpg')
                imagem.setAttribute('width', '400px')
            }
            

        }
        
        imagem.style.alignContent = 'center';
        imagem.style.display = 'flex';
        resultadoDiv.style.color = 'red';
        resultadoDiv.style.fontSize = '23px';
        resultadoDiv.innerHTML = `Detectamos ${generoDaPessoa} com ${idadeDaPessoa} anos.`;
        resultadoDiv.appendChild(imagem);
    }
})

