const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) { // i = indice
    somaDasNotas += notas[i]; // é o mesmo que escrever: somaDasNotas = somaDasNotas + notas[i];

}

//primeira expressão (let i): executada apenas uma vez
// no caso desse código (let i) = começando do começo

//segunda expressão (i<notas.length): condição de execução
// no caso desse código (i<notas.length) = vai continuar repetindo enquanto o "i" for menor que o comprimento do array (4)

//terceira expressão (i++): executada sempre ao final do bloco 
// no caso desse código (i++) = incrementa o seu valor em 1, fazendo que a variável "i" deixe de ser 0 e passe a valer 1

const media = somaDasNotas / notas.length; // dividir para fazer a média
console.log(`a média das notas é ${media}`);