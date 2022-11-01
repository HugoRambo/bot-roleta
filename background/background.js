//abertura


chrome.runtime.onInstalled.addListener(function(object){
    chrome.tabs.create({
        url:'https://livecasino.bet365.com/home/br'
    })
})