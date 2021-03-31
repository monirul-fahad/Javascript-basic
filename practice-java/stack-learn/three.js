var a = 10
var b = 2

// a > b true false

if (a > b) {
    console.log('A is greater than B')
}

if (a < b) {
    console.log('B is greater than A')
}

var n = 50

if (n % 2 === 0) {
    console.log(n + ' is Even Number')
}

if (n % 2 === 1) {
    console.log(n + ' is Odd Number')
}

// else
var a = 10
var b = 20

if (a > b) {
    console.log('A is greater than B')
} else {
    console.log('B is greater than A')
}

var n = 51

if (n % 2 === 0) {
    console.log(n + ' is Even Number')
} else {
    console.log(n + ' is Odd Number')
}

// else if

var a = 2
var b = 20
  

if (a > b) {
    console.log('A is greater than B')
} else if (a < b) {
    console.log('B is greater than A')
} else {
    console.log('They Both are Same')
}

var n = 1

if (n === 0) {
    console.log(n + ' is zero')
} else if (n % 2 === 0) {
    console.log(n + ' is Even Number')
} else {
    console.log(n + ' is Odd Number')
}

var date = new Date()


// week name.
// 0 - Sunday, 1 - Monday, 2 - Tuesday

var today = date.getDay()

switch (today) {
    case 0:
        console.log('Today is Sunday')
        break
    case 1: 
        console.log('Today is Monday')
        break
    case 2:
        console.log('Today is Tuesday')
        break
    case 3: 
        console.log('Today is Wednesday')
        break
    case 4:
        console.log('Today is Thursday')
        break
    case 5: 
        console.log('Today is Friday')
        break
    case 6: 
        console.log('Today is Saturday')
        break
    default: console.log('Not a Valid Number')
}