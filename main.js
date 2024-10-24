const form = document.getElementById('form-agenda');
const nomes = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaAgenda();
});

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputTelefoneNaAgenda = document.getElementById('telefone');

    if(nomes.includes(inputNomeAgenda.value)){
        alert(`O nome: ${inputNomeAgenda.value} já foi inserido`);
    }else{
        nomes.push(inputNomeAgenda.value);
        telefone.push(parseInt(inputTelefoneNaAgenda.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputTelefoneNaAgenda.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeAgenda.value = '';
    inputTelefoneNaAgenda.value = '';
}

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}