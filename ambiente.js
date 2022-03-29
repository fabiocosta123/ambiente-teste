

let qtd = document.getElementById('quantidade')
let kmi = document.getElementById('kmi')
let kmf = document.getElementById('kmf')
let preco = document.getElementById('valorUnitario')
let res = document.getElementById('res')
let res1 = document.getElementById('res1')

// função principal
function calcular(){
    calculaMedia()
    calculaPrecoKm()
}
// calcula km/l
function calculaMedia() {
    let mediaConsumo = (Number(kmf.value) - Number(kmi.value)) / Number(qtd.value)
    res.innerHTML = `A media de consumo é de ${mediaConsumo.toFixed(2)} km/l`
    return mediaConsumo
}

// calcula o preço por km rodado

function calculaPrecoKm(){
    let tabastecido = Number(qtd.value) * Number(preco.value) // valor total abastecido
    let kmr = Number(kmf.value) - Number(kmi.value) // calcula o km rodado
    let pkmr = tabastecido/ kmr
    res1.innerHTML = `O preço por km rodado é de R$ ${pkmr.toFixed(2)}`
    return pkmr
}




