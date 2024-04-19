const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas) { // somar as notas das 3 salas e fazer a média
    // const somaDasNotas = listaDeNotas.reduce ((acumulador, nota) => { 
    //   return acumulador + nota;                                      
    // }, 0) 
    
    // depois que passamos a função interna, precisa receber um segundo parâmetro: o valor inicial para ser acumulado.
    // trabalhamos com valores de soma e queremos que esse valor comece com 0 e some cada um dos elementos.
    // forma mais simples:
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

    const media = somaDasNotas / listaDeNotas.length; // ainda dentro da função
    return media;
}                                                                    

// reduce = reduz todos elementos de um array a um elemento só
// primeiro parâmetro: chamado de acumulador
// segundo parâmetro: elemento que está sendo iterado no momento

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));