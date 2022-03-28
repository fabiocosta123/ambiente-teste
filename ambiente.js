/*localStorage.setItem('Produto', 'valor')
function calcular(){
    const quantidade = document.getElementById('quantidade')
    const valor= document.getElementById('valoUnitario')
    alert(quantidade);
}*/
function calcular(){
  let media = calculaValor() / calculakm()
  alert(media)
  return media
   
}
function calculaValor(){
    let qtd = document.getElementById('quantidade')
    let valor = document.getElementById('valorUnitario')
    let total = Number(qtd.value) * Number(valor.value)
    return total
}
function calculakm(){
    let kmi = document.getElementById('kmi')
    let kmf = document.getElementById('kmf')
    let kmr = Number(kmf.value) - Number(kmi.value)
    return kmr
}