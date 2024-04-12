const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach()(function (nota) { // forEach() = o parâmetro (nota) é uma função que é chamada de volta quando executamos o forEach()
    somaDasNotas += nota;         // callback = funções que chamam outras funções dentro dela
})

// ou poderia ser:

// notas.forEach(somaNotas);
//
// function somaNotas (nota) {
//    somaDasNotas += nota;
// }

const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);
