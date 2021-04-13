var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

var arr = [4, 8, 1, 6, 7, 9, 0, 4, 3, 5, 6, 8, 2, 1, 7, 1]

// arr.sort()
// console.log(arr)

// persons.sort()
// console.log(persons)

arr.sort(function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})

console.log(arr)

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})

console.log(persons)

var res1 = arr.every(function (value) {
    return value % 2 === 0
})
console.log(res1)

var res2 = arr.every(function (value) {
    return value >= 0
})
console.log(res2)

var res3 = arr.some(function (value) {
    return value % 2 === 1
})
console.log(res3)

var res4 = arr.some(function (value) {
    return value < 0
})
console.log(res4)


       // return
function greet(msg) {
    function greetings (name) {
        return msg + ', ' + name + '!'
    }

    return greetings
}

var gm = greet('Good Morning')
var gn = greet('Good Night')
var hello = greet('Hello')
// console.log(typeof gm)
var msg = gm('Monirul Fahad')
console.log(gn('Twinkle Cats'))
console.log(msg)
console.log(hello('Shajeda Akther'))

function base(b) {
    return function(n) {
        var result = 1
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))

var base5 = base(5)
console.log(base5(2))
console.log(base5(3))
console.log(base5(5))


    // recursive 

    function sayHi(n) {
        if (n === 0) {
            return 
        }
        console.log('Hi, I am Calling')
        sayHi(n - 1)
    }
    
    sayHi(10)
    
    function sum(n) {
        if (n === 1) {
            return 1
        }
        return n + sum(n-1)
    }
    
    console.log(sum(5))
    
    function fact(n) {
        if (n === 1) {
            return 1
        }
    
        return n * fact(n-1)
    }
    console.log(fact(4))
    
    var arr = [1, 2, 3, 4, 5]
    
    function sumOfArray(arr, lastIndex) {
        if (lastIndex < 0) {
            return 0
        }
        return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
    }
    
    console.log(sumOfArray(arr, arr.length - 1))


    // carrying 
    function add(a, b, c) {
        return a + b + c
    }
    
    // add(41, 52, 63)
    
    function currying(a) {
        return function (b) {
            return function (c) {
                return a + b + c
            }
        }
    }
    
    var result = currying(5)(10)(15)
    console.log(result)    

 
    // Function composition

function print(inp) {
    console.log(inp)
}

function multifyByFive(n) {
    return n*5
}

function add(a, b) {
    return a + b
}

print(multifyByFive(add(5, 5)))
