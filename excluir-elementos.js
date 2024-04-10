const notas = [10, 6, 8, 5.5, 10];

notas.pop () // método para remover elementos do final (no caso, o 10)

const media = (notas [0] + notas [1] + notas [2] + notas [3]) / notas.length;

console.log(media.toFixed (2)); //  reduzir a quantidade de casas decimais (2 = selecionamos duas casas)