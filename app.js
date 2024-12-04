let numeroSecreto = gerarNumeroAleatorio()
let tentativa = 1

mensagemDeInicio()

function exibirTextoNaTela(tag, texto ){
    let campoTela = document.querySelector(tag)
    campoTela.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function mensagemDeInicio(){
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10')
}

function verificarChute(){
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
        let mensagem = (`Você acertou o número secreto com apenas 
            ${tentativa} ${palavraTentativa}`)
        exibirTextoNaTela('p', mensagem)
        document.getElementById('reiniciar').removeAttribute('disabled')
        
        
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor')
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
    }
    tentativa++
    limparCampo()
}

function gerarNumeroAleatorio(){
    return numeroEscolhido = parseInt(Math.random() * 10 + 1)
}

function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativa = 1
    mensagemDeInicio()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}