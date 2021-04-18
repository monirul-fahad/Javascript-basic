

// function Person(name) {
//     this.name = name
// }

// var p1 = new Person('Fahad')
// console.log(p1)

// var person = {
//     name: 'Monirul Islam'
// }

// console.log(person)



var person = {
    name: 'Cristiano Ronaldo'
}

Object.defineProperty(person, 'name', {
    enumerable: false,
    writable: false,
    configurable:false
})


function Square (width) {
    this.width = width
    this.getWidth = function () {
        console.log('Width is ' + this.width)
        // this.draw()
    }
}

Square.prototype = {
    draw: function () {
        this.getWidth()
        console.log('Draw')
    },
    toString: function () {
        return 'My width is = ' + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)


for (var i in sqr1){
    console.log(i)
}


