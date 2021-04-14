var myName = 'Fahad'

function printName() {
    console.log(myName)
}
myName = 'Monirul'
printName()



   // scope chain
   
var a = 11

function one() {
    var b = 12
    function two() {
        var c = 45
        console.log(c)
    }

    function three() {
        var d = 56
        console.log(d)
    }
    console.log(b)
    two()
    three()
    four(b)
  
}

function four(n) {
    return n + a
}

one()


// one -> a, b, two(), three(), four()
// two -> a, b, c, two(), three(), four()
// three -> a, b, d, two(), three(), four()
// four -> a, n, one()


// closure 

// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

// function test() {
//     var msg = 'I am Learning JS Lexical Scope and Closure'

//     function sayMsg() {
//         console.log(msg)
//     }

//     sayMsg()
// }
//  test()


// with clousre 

// function test() {
//     var msg = 'I am Learning Lexical Scope and Closure'

//     return function () {
//         console.log(msg)
//     }
// }

// var sayMsg = test()
// sayMsg()

for (var i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(i)
}

