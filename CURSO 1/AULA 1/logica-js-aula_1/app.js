alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log (numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Voce errou!')    
}