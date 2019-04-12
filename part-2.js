var fs = require('fs')

var fileContents = fs.readFileSync('shopping-basket.json', 'utf-8')

var data = JSON.parse(fileContents)

for (var item of data.basket) {
    if (item.name == 'Candles') {
        item.quantity = 10;
    }
}

var basketTotal = 0
for (var item of data.basket) {
    var totalPricePerItem = item.price * item.quantity;
    basketTotal += totalPricePerItem
    var str = `${item.name} $` + totalPricePerItem
    console.log(str)
}
var strBas = "$" + basketTotal
console.log(strBas)

var jsonString = JSON.stringify(data)

console.log(jsonString)