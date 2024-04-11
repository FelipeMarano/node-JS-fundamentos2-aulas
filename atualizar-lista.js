const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo'); 
// o "Splice" recebe 3 parâmetros = da onde iniciar, numero de elementos para deletar e adicionar um novo onde foi deletado
// "1" = índice 1 (Ana) // "2" = dois elementos excluídos a partir do índice 1 (Ana) 
// logo "Ana" e "Caio" serão deletados 

console.log(listaEstudantes);