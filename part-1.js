var fs = require('fs')

var fileContents = fs.readFileSync('./names.txt', 'utf-8')
var textByLine = fileContents.split('\n')
var reversedArr = textByLine.reverse();

function reverse(textByLine) {
    var temp = []
    var len = textByLine.length
    for (var i = (len-1); i >= 0; i--) {
        temp.push(textByLine[i]);
    }
    return temp;
}

var reversedArr = reverse(textByLine)
var joinedReversed = ""
for (i =0; i < reversedArr.length; i++) {
    joinedReversed += (reversedArr[i] + "\n")
}

fs.writeFileSync('names-reversed', joinedReversed, 'utf-8')

console.log(textByLine)
console.log(reversedArr)
console.log(joinedReversed)