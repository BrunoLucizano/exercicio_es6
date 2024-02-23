const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 },
    { nome: 'Julia', nota: 9 },
    { nome: 'Lucas', nota: 3 },
    { nome: 'Mariana', nota: 7 },
    { nome: 'Gustavo', nota: 6 },
    { nome: 'Camila', nota: 5 }
];

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);
console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);
