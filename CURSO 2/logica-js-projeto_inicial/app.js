function Olamundo () {
    console.log('Olá, mundo!')
}
Olamundo ();

let nome = prompt ('Qual seu nome?');

function Olanome() {
console.log(`Olá, ${nome}`);
}

Olanome ();

function numeroDobrado(numero) {
return numero * 2
}

let resultado = numeroDobrado(7);
console.log(resultado);

function numerotriplo(a,b,c) {
    return (a + b + c) / 3
}

let resultadotriplo = numerotriplo(3,4,5);
console.log(resultadotriplo);

function maiorNumero(d,e) {
    return d > e ? d : e;
}

let resultadoMaior = maiorNumero(17,10);
console.log(resultadoMaior);
