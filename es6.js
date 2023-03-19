const Alunos = [
    {
    nome: 'maria',
    nota: 8
    },
    {
        nome: 'diego',
        nota: 6
    },
    {
        nome: 'henrique',
        nota: 4
    },
    {
        nome: 'jessica',
        nota: 5
    },
    {
        nome: 'anaPaula',
        nota: 7
    },
    {
        nome: 'Rodrigo',
        nota: 10
    },
]


const alunosComNotaAzul = Alunos.filter(function(itens){
    return itens.nota >= 6
})

console.log(alunosComNotaAzul);
