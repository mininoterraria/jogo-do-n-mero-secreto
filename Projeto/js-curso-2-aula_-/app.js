
let numerosSorteados = []; //Lista onde ficará os nomes já sorteados para evitar repetição.
let tentativas = 1;
quantidadeNumeros = 3;
//Função para gerar número aleatório.
function gerarNumeroAleatorio(){
    let gerarNumero = parseInt(Math.random() * quantidadeNumeros + 1);
    
    if(numerosSorteados.length == quantidadeNumeros){
        numerosSorteados = []; //Caso todos os possiveis numeros sejam sorteados, a lista de valores já sorteados resetará.
    }
    //Essa condição impedirá que seja gerado o mesmo valor aleatório na mesma sessão do jogo
    if(numerosSorteados.includes(gerarNumero)){       
        gerarNumeroAleatorio();     
    }else{
        numerosSorteados.push(gerarNumero);
        console.log(numerosSorteados);
        return gerarNumero;   //Isso retornará o número gerado para o código que pediu por ele.
    }
   
    
}
numeroSecreto = gerarNumeroAleatorio();



//Função para exibir os textos na tela.
function exibirTexto(tagHTML,texto){
    let seletor = document.querySelector(tagHTML);
    seletor.innerHTML = texto;
}

//Função de exibição do texto inicial do jogo.
function textoInicial(){
    exibirTexto('h1','Jogo do número secreto!');
    exibirTexto('p','Escolha um número entre 1 a 10');
}
textoInicial();

//Função para verificar se o número colocado pelo jogador está correto.
function verificarNumero(){
    let chute = document.getElementById('campoNumerico').value; //Pegando o valor chutado pelo jogador para posterior verificação.
    if(chute > numeroSecreto){
        exibirTexto('h1','Errou!');
        exibirTexto('p','O número secreto é menor');
        tentativas++;
    }else if(chute < numeroSecreto){
        exibirTexto('h1','Errou!');
        exibirTexto('p','O número secreto é maior');
        tentativas++;
    }else{
        let palavra_tentativa = tentativas == 1 ? 'tentativa' : 'tentativas'; //A palavra ficará no plural ou singular de acordo com a quantidade de acertos.
        exibirTexto('h1','Acertou!');
        exibirTexto('p',`Parabéns, você descobriu o número em ${tentativas} ${palavra_tentativa}`);
        //Após acertar o número secreto, desativará o botão chutar e habilitará o botão de novo jogo.
        habilitarNovoJogo();

    }
}
//Função para habilitar o botão de novo jogo.
function habilitarNovoJogo(){
        let botaoChutar = document.getElementById('botaoChutar');
        botaoChutar.setAttribute("disabled",'true');
        let botaoNovoJogo = document.getElementById('reiniciar');
        botaoNovoJogo.removeAttribute('disabled','false');
}
//Função da configuração do novo jogo.
function novoJogo(){
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    textoInicial();
    let botaoChutar = document.getElementById('botaoChutar');
    botaoChutar.removeAttribute("disabled",'true');
    let botaoNovoJogo = document.getElementById('reiniciar');
    botaoNovoJogo.setAttribute('disabled','true');
    
}



    








