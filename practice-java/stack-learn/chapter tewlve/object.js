// alert('I am learning JavaScript')

// var rect = {
//     width: 100,
//     height: 50,

//     draw: function() {
//         console.log('i am a rectangle')
//         this.printProperties()
//     },
//     printProperties: function() {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }

// }
// rect.draw()


// var another = {
//     width: 87,
//     height:45,
//     print: rect.printProperties
// }

// another.print()



// Factory pattern 

// var createRect = function (width, height) {
//     return  {
//         width: width,
//         height: height,

//         draw: function () {
//             console.log('i am a rectangle')
//             this.printProperties()
//             console.log(this)
//         },
//         printProperties: function () {
//             console.log('My width is ' + this.width)
//             console.log('My height is ' + this.height)
//         }

//     }
// }
// var rect1 = createRect(20,15)
// rect1.draw ()

// var rect2 = createRect(40,25)
// rect2.draw()


// constructor pattern 

// var Rectangle = function (width, height) {
//     this.width = width
//     this.height = height

//     this.draw = function () {
//         console.log('i am a rectangle')
//         this.printProperties()
//         console.log(this)
//     }
//     this.printProperties = function () {
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// var rect3 =  new Rectangle(12, 25)
// rect3.draw()


// new keyword 

// function myNew(constructor) {
//     var obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArray.slice(1))

//     return obj
// }

// var rect4 =  myNew(Rectangle, 45, 75)
// rect4.draw()

// function is an object 


// var Rect = new Function('width', 'height', `this.width = width
//     this.height = height

//     this.draw = function() {
//         console.log('I am a rectangle')
//         this.printProperties()
//         console.log(this)
//     }

//     this.printProperties = function () {
//         console.log('My Width is ' + this.width)
//         console.log('My Height is ' + this.height)
//     }`
// )

// var rect5 = new Rect(4, 5)
// console.log(rect5)

// function myFunc(c, d) {
//     console.log(this)
//     console.log(this.a + this.b + c + d)
// }

// // Call, Apply
// myFunc.call({a: 40, b: 25}, 10, 5)
// myFunc.apply({a: 400, b: 250}, [10, 5])


// // bind 
// var testBind = myFunc.bind({ a: 7, b: 3 })
// testBind(5, 7)


// Pass by Value vs Pass by Reference
// Call by Value vs Call by Reference

// var n = 10

// function change(n) {
//     n = n + 100
//     console.log(n)
// }

// change(n)
// console.log(n)

// var obj = {
//     a: 10,
//     b: 20
// }

// function changeMe(obj) {
//     obj.a = obj.a + 100
//     obj.b = obj.b + 100
//     console.log(obj)
// }

// changeMe(obj)
// console.log(obj)



for(var i = 0; i < 10; i++){
    if (i === 5) {
        break
    }
    console.log('I value is now ' + i)
}

for(var i = 0; i < 10; i++) {
    if(i === 5) {
        console.log(i + ' value is skipped');
        continue;
    }
    console.log('I value is now ' + i);
}