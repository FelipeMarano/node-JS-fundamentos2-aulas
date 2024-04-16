const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno, indice) => { // para filtrar o nome de algum aluno reprovado
    return medias [indice] < 7; // apenas aparecer se a nota for menor que 7
  });

console.log(reprovados);


// obs: na linha 4, o parametro "aluno" não está sendo utilizado
// porem as funções chamam os parâmetros por ordem, então não podemos simplesmente retirar da função um parâmetro que não é usado. 
// Precisamos mantê-lo para preservar a ordem do parâmetro. Nesse caso, uma boa prática é substituir o nome por um underscore (_):
// const reprovados = alunos.filter((_, indice) => {
// Isso significa que estamos marcando o lugar do parâmetro não utilizado
// mas assinalamos que não o usamos e ele deve ser pulado para utilizar o correspondente.

