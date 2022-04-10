const markBills = 1497.16
const zailaBills = 338.72

document.getElementById('zailaBills').innerHTML = Math.round(zailaBills * 12/26 * 100)/100
document.getElementById('markBills').innerHTML = Math.round(markBills * 12/26 * 100)/100


function check(buy,sell) {
    buyValue = String(document.getElementById('buy').value)
    sellValue = String(document.getElementById('sell').value)
    
    buy = parseFloat(buyValue) * 1.004
    sell = parseFloat(sellValue) * 0.996

    result = Math.round((sell - buy) * 100) / 100
    gain = Math.round(result / buy * 10000) / 100
    
    if(event.key === 'Enter') {
        document.getElementById('result').innerHTML = '$' + result + ' at ' + gain +'%'
    }
}