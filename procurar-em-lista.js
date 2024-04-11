const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; // para juntar os dois arryas

function exibeNomeENota (aluno) {
    if  (lista[0].includes(aluno)) { // para achar se tem algum aluno
        const indice = lista[0].indexOf(aluno) // indexOf = retorna o índice 
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
        } else {
        console.log('Estudante não existe na lista');
        }
} 

exibeNomeENota('Juliana'); // existe no array
exibeNomeENota('Vini'); // não existe no array