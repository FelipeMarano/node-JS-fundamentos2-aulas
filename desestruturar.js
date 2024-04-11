const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; // para juntar os dois arryas

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) { // para achar se tem algum aluno
    const [alunos, medias] = lista; // desestruturando
    const indice = alunos.indexOf(aluno); // indexOf = retorna o índice 
    const mediaAluno = medias[indice];
    console.log(`${aluno} tem a média ${mediaAluno}`);
  } else {
    console.log('Estudante não existe na lista');
  }
} 

exibeNomeENota('Juliana'); // existe no array
exibeNomeENota('Vini'); // não existe no array