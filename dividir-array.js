const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = listaEstudantes.slice (0, listaEstudantes.length/2); // dividir a lista (começa no 0, depois divide ela total em 2)
// o fim não é incluido
const sala2 = listaEstudantes.slice(listaEstudantes.length/2); // pega a metade restante ate o fim

console.log(sala1);
console.log(sala2);