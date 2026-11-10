const form = document.getElementById('form-agenda');
const nomes = new Set();
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const campoNome = document.getElementById('nome-agenda');
    const campoTelefone = document.getElementById('telefone');
    const nome = campoNome.value.trim();
    const telefone = campoTelefone.value.trim();
    const chave = nome.toLocaleLowerCase('pt-BR');
    if (!nome || !telefone) {
        alert('Preencha nome e telefone.');
        return;
    }
    if (nomes.has(chave)) {
        alert('Este nome já está na agenda.');
        return;
    }
    const linha = document.createElement('tr');
    for (const valor of [nome, telefone]) {
        const celula = document.createElement('td');
        celula.textContent = valor;
        linha.appendChild(celula);
    }
    document.querySelector('tbody').appendChild(linha);
    nomes.add(chave);
    form.reset();
    campoNome.focus();
});
