const form = document.getElementById('form-contacts')
let linhas = ''
const numeros = [];
const contatos = [];


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizarLinhas();
    quantidadeDeContatos ();

})

function adicionarLinhas(){
    const nomeContato =  document.getElementById('schedule-contacts')
    const numeroContato = document.getElementById('schedule-number')  
    
    if (numeros.includes(numeroContato.value)){
        alert(`O número ${numeroContato.value} inserido!`)
    } else  {
        contatos.push(nomeContato.value);
        numeros.push(numeroContato.value);
    let linha = `<tr>`;
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${numeroContato.value}</td>`
    linha += `</tr>`;
    
    linhas += linha
    }  
    nomeContato.value = ''
    numeroContato.value = ''
}

function atualizarLinhas () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function quantidadeDeContatos (){
    let somaDosContatos = 0
    let qnt = 0
    for(let i = 0; i < numeros.length; i++) {
        numeros[i]; qnt++;
    } 
    return document.getElementById('contacts-quantity').innerHTML = qnt
}

