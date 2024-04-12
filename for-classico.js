const notas = [10, 8.5, 5, 6.5, 8, 7.5];

for (let indice = 0; indice<notas.length; indice++) { // o "indice" também é chamado de apenas "i"
    console.log(indice, notas[indice]);
}

//primeira expressão (let indice): executada apenas uma vez
// no caso desse código (let indice) = começando do começo

//segunda expressão (indice<notas.length): condição de execução
// no caso desse código (indice<notas.length) = vai continuar repetindo enquanto o "índice" for menor que o comprimento do array (6)

//terceira expressão (indice++): executada sempre ao final do bloco 
// no caso desse código (indice++) = incrementa o seu valor em 1, fazendo que a variável "indice" deixe de ser 0 e passe a valer 1