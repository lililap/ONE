function calculoIMC(peso,altura) {
return peso / (altura * altura)
}

let peso = 70;
let altura = 1.71;

console.log(calculoIMC(peso,altura));


function conversaoDolar(real){
    return real / 4.8
}

console.log(conversaoDolar(10));


function areaDesejada(altura,largura) {
    return altura * largura
}

console.log(areaDesejada(10,10));

tabuadaNumero(7);

function tabuadaNumero (numero){
    for (let i = 1; i<=10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = resultado`)
    }

   
}