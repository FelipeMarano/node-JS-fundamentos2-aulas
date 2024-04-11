const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; // para juntar os dois arryas

console.log(
`a aluna da posição 1 da lista é: ${lista[0][1]}. 
a nota dessa aluna é ${lista[1][1]}`
);  

// na primeira linha: o [0] é o array "alunos" e o [1] é o índice desse array (Juliana)
// na segunda linha: o [1] é o array "medias" e o [1] é o índice desse array (8)
