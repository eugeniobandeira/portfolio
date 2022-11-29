function formatValue(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return 'R$ ' + value
}

function pessoasRateio(value) {
    if (value == 1) {
        return value + ' pessoa'
    } else {
        return value + ' pessoas'
    }      
}
function update() {
    let bill  = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value
    
    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    
    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatValue(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatValue(billTotal)
    document.getElementById('splitValue').innerHTML = pessoasRateio(split)
    document.getElementById('billEach').innerHTML = formatValue(billTotal / split)

}

