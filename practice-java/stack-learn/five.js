
// String


var n = 10
var str = String(n)
console.log(str)

// Escape Notation

var str = 'This is a \'String\''
console.log(str)
var str = 'This is a \nString'
console.log(str)
var str = 'This is a \tString'
console.log(str)
var str = 'This is a \\String'
console.log(str)

// Comparison

var a = 'aaaaaaZ'
var b = 'aaaaaaz'

console.log(a > b)

console.log('a' > 'Z')

console.log('001' == 1)

var a = 'I am'
var b = 'Monirul Fahad'

var c = a.concat(' ', b)
var d = c.substr(5)
console.log(d)
console.log(c.charAt(0))
console.log(c.startsWith('I am'))
console.log(c.endsWith('fah007766'))
console.log(a.toUpperCase())
console.log(b.toLowerCase())
console.log('     Fahadislam     '.trim())
console.log(c.split(' '))

var str = 'Monirul Fahad'

var length = 0

while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
}

console.log(length)
console.log(str.length)
console.log('somnetyhsdoiewuokjsdlfj'.length)