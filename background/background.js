//abertura


chrome.runtime.onInstalled.addListener(function(object){
    chrome.tabs.create({
        url:'https://livecasino.bet365.com/home/br'
    })
})

//display roleta ativado 

let displayLobbyExists = false

// display roleta existe
let displayRoletaExists = false

//Acertos e erros para gravar banco de dados futuro

let contagemAcertos = 0
let contagemErros = 0

//Colunas e duzias da roleta

let primeiraDuzia = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
let segundaDuzia = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
let terceiraDuzia = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']
let primeiraColuna = ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']
let segundaColuna = ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35']
let terceiraColuna = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36']

let inverterLeitura = false 
let leituras = 0

var configuracao = {
    coluna: 0,
    duzia: 0,
    gale: 0,
    par:  0,
    impar:  0
}

//Salva configuração local
function salvarConfig() {
    chrome.storage.local.set({
        configuracao,
    }, () => {
    })
}
function carregarConfiguracao() {
    chrome.storage.local.get(["configuracao"], (res) => {
        if (res.configuracao == undefined) {
            configuracao.coluna = 5
            configuracao.duzia = 5
            configuracao.gale = 1
            

            colunaRep = configuracao.coluna
            duziaRep = configuracao.duzia
            gale = configuracao.gale

            salvarConfig()
        } else {
            configuracao = res.configuracao

            colunaRep = configuracao.coluna
            duziaRep = configuracao.duzia
            gale = configuracao.gale
        }
    })
}