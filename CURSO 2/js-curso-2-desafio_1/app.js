let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio!';

function clicarBotaoConsole() {
    console.log('O botão console foi clicado')
}

function clicarBotaoAlerta() {
    alert('Eu amo JS')
}

function clicarBotaoPrompt () {
    let cidade = prompt('Escolha uma cidade');;
    alert(`Estive em ${cidade} e lembrei de você!`)
}

function clicarBotaoSoma () {
    let numero1 = parseInt(prompt('Escolha 1 número inteiro'))
    let numero2 = parseInt(prompt('Escolha outro número inteiro'))
    let resultado = numero1 + numero2
    alert(`Seu resultado é ${resultado}`)
}
