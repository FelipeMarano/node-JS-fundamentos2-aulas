 // callback = funções que chamam outras funções dentro dela

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

 notas.forEach(somaNotas); // forEach() = o parâmetro (nota) é uma função que é chamada de volta quando executamos o forEach()

 function somaNotas (nota) {
    somaDasNotas += nota;
}

// ou poderia ser:

// notas.forEach()(function (nota) { 
//    somaDasNotas += nota;        
// })


const media = somaDasNotas / notas.length;

console.log(`a média das notas é ${media}`);
