//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// criar um array para armazenar o nome dos amigos
let amigos = [];

function exibirNomeNaTela (tag,texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function atualizarLista () {
    // obter elemento da lista 
    let lista = document.getElementById("listaAmigos");
    // limpar lista existente
    lista.innerHTML = ''; 
    // adicionar cada amigo dentro da lista
    for (let amigo of amigos) {
        lista.innerHTML += `<li>${amigo}</li>`
    }
}

function sortearAmigo () {
    // validar se há amigos disponíveis
    let resultado = document.getElementById("resultado");
    if (amigos.length == ''){
        alert('Sua lista de amigos está vazia!');
        resultado.innerHTML = 'Você precisa escolher nomes para a lista antes de sortear';
    }
    // gerar índice aleatório
    let indice = Math.floor(Math.random() * amigos.length);
    let amigosorteado = amigos[indice];
    // aparecer mensagem do sorteio no HTML
    resultado.innerHTML = `Seu amigo secreto sorteado é ${amigosorteado}`;
}

// capturar o valor do campo de entrada do nome dos amigos
function adicionarAmigo() {
    let inputField = document.querySelector('input');
    let nome = inputField.value

    // verificar se o campo não está vazio
    if (nome.trim() == '') {
        // exibir alerta caso esteja vazio
        alert('Por favor, insira um nome');
    } else { // atualizar a array que armazena o nome dos amigos
        amigos.push(nome);
        // limpar o campo após um nome válido ser colocado
        inputField.value = '';
        // atualizar lista de amigos
        atualizarLista();
    }
}


