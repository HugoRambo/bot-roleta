carregarConfiguracao()

function carregarConfiguracao() {
    chrome.storage.local.get(["configuracao"], (res) => {
        if (res.configuracao == undefined) {
            document.getElementById('txtColuna').textContent = 'Repetição de 5 colunas'
            document.getElementById('txtDuzia').textContent = 'Repetição de 5 dúzias'
            document.getElementById('txtGale').textContent = 'Fazer 1 Gale'
        } else {
            document.getElementById('txtColuna').textContent = `Repetição de ${res.configuracao.coluna} colunas`
            document.getElementById('txtDuzia').textContent = `Repetição de ${res.configuracao.duzia} dúzias`
            document.getElementById('txtGale').textContent = `Fazer ${res.configuracao.gale} Gale`
        }
    })
}