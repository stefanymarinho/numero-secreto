 let listaDeNumerosSorteados = [];
 let numeroLimite = 10 ;
 let  numeroSecreto = gerarNumeroAleatorio();
 let tentativas = 1; 
 

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(params) {
exibirTextoNaTela("h1","Jogo do número secreto" );
exibirTextoNaTela("p","Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function verificarChute(){
  let chute = document.querySelector('input').value;
 let numero = parseInt(chute);
   console.log( numero == numeroSecreto);

if(chute == numeroSecreto ){
  exibirTextoNaTela('h1',"Acertou!");
 let palavraTentativa = tentativas > 1 ? "tentativas": "tentativa";
  let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
  exibirTextoNaTela('p', mensagemTentativas);
  document.getElementById('reiniciar').removeAttribute('disabled');
}else if (chute > numeroSecreto){
exibirTextoNaTela('p',"O número secreto é menor");
} else{
  exibirTextoNaTela('p',"O número secreto é maior");
}
tentativas ++ ; // soma tentativas caso não acerte de primeira 
limparCampo();
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // limpar a lista quando chegar a quantidade de numeros sorteados já que a mesma quantidade de numeros sorteados é o taanho da lista 

  if(quantidadeDeElementosNaLista == numeroLimite ){
    listaDeNumerosSorteados = []
  }


  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio(); // se já foi escolhido,vai gerar um novo 
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido); // colocar o numero na lista 
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}
function limparCampo(){
chute = document.querySelector('input');
chute.value = '';
}
function reiniciarJogo(params) {
  numeroSecreto == gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);
}  
