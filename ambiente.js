

let qtd = document.getElementById('quantidade')
let kmi = document.getElementById('kmi')
let kmf = document.getElementById('kmf')
let preco = document.getElementById('valorUnitario')
let res = document.getElementById('res')

function calcular(){
    calculaMedia()
}
function calculaMedia() {
    let mediaConsumo = (Number(kmf.value) - Number(kmi.value)) / Number(qtd.value)
    res.innerHTML = `A media de consumo é de ${mediaConsumo} km/l`
    return mediaConsumo
}


