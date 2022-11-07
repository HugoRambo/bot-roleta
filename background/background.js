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
function analisandoEstrategias() {
     //Buscar tudo as roleta, seletor class
    qtdRoletas = document.getElementsByClassName('lobby-tables__item').length
    //valida lobby
    if (qtdRoletas > 1) {
        apostouDuzia = false
        apostouColuna = false}

        // inserir display no lobby
        if (!displayLobbyExists) {
            if (document.querySelector('.lobby-header__filterqDmLZJ0RC7XlyyjENEqe')) {
                painelLobby = document.querySelector('.lobby-header__filterqDmLZJ0RC7XlyyjENEqe')
            } else if (document.querySelector('.lobby__filter')) {
                painelLobby = document.querySelector('.lobby__filter')
            }
            painelLobby.insertAdjacentHTML('afterbegin', '<h1 id = "displaybotlobby" style="width: 90%;background-color: #56ef00;color: black;text-align: center; font-size: xx-large;font-weight: bolder;align-self: center;"></h1>')
            //Aciona roletas ou nao
            displayRoletaExists = false
            displayLobbyExists = true
        }

        inserirTextoDisplay(`Bot Auto - ${contagemAcertos} ACERTOS - ${contagemErros} ERROS - MONITORANDO`, 1)
        //listar as roletas do lobby
        var roletasLobby = listarRoletasLobby(qtdRoletas)
        //incrementr as roletas para buscar confirmação de estrategia
        for (let i = 0; i < roletasLobby.length; i++) {
            if (estrategiaAltosbaixos(roletasLobby[i].sequencia) == 1) {
                document.getElementsByClassName('lobby-table__game-logo')[i].click()
                break
            } else {
                inserirTextoDisplay(`Bot Auto - ${contagemAcertos} ACERTOS - ${contagemErros} ERROS - MONITORANDO`, 1)
            }
        }}
    
//FALTA TRANSFORMAR TODAS as roletas buscadas no selector de cima em um array, pra conseguir aplicar a estrategia. 
