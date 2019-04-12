var fs = require('fs')

var fileContents = fs.readFileSync('names.txt', 'utf-8')

console.log(fileContents)
