
let qtd = document.getElementById('quantidade')
let valor = document.getElementById('valorUnitario')
let kmi = document.getElementById('kmi')
let kmf = document.getElementById('kmf')
// está calculando o valor do km rodado
function calculaPrecoKm() {
    let media = calculakm() / calculaValor()
    return media
}
function calculaValor() {

    let total = Number(qtd.value) * Number(valor.value)
    return total
}
function calculakm() {

    let kmr = Number(kmf.value) - Number(kmi.value)
    return kmr
}

// calcular a media 

function calculaMediaKm() {
    let mediakm = kmr / Number(qtd.value)
    return mediakm
}

function calcular(){
    calculaPrecoKm()
    calculaValor()
    calculaMediaKm()
    alert(`O valor gasto por litro é de R$ ${media.toFixed(2)} e consumo médio de ${mediakm.toFixed(2)}`)
}