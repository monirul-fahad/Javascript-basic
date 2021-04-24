
// String template 

// var age = 17
// var name = 'Monirul Islam'

// // console.log('My name is ' + name + ' and I am ' + age + ' years old') 
// console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not ': ""}adult.`)
// console.log(name.padStart(15))

// function 

// function add (a, b){
//     return a + b
// }

// New arrow function 

// let add = (a, b) => a + b
// console.log(add(45,50))

// // when one peramiter 

// let double = n => n*n 
// console.log(double(5))

// another arrow function 

// let obj = {
//     name: 'HM Nayem',
//     print: function () {
//         setTimeout(() => {
//             console.log(this)
//             console.log(`Hello, ${this.name}`)
//         }, 2000)
//     }
// }
// obj.print()
 

//    default Parameter 

// function sqr(n=1) {
//     return n*n
// }
// console.log(sqr())



// REST & SPREAD OPERATOR   
    // sum using Rest OP 

// function sum(...rest) {
//     return rest.reduce((a,b) => a + b)
// }
// console.log(sum(1, 2, 3 , 4 , 5))

    // spread OP 
// let a = [1, 2, 3]
// console.log(...a)

// let obj = {
//     a: 10, 
//     b: 20,
//     c: 30
// }
 
// let obj2 = {
//     ...obj
// }


// object shortcurt 

// let obj = {
//     a,
//     b,
//     print() {
//         console.log(this)
//     }
// }
// obj.print()


// DESTRUCTURING 

// let person = {
//     name: 'Monirul Islam',
//     email: 'immonirulfahad@gmail.com',
//     address: {
//         city: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }

// let { name, email, address, address: {city, country} } = person
// console.log(name, email, city, country)

// Object to array method 

// var obj = {
//     a: 10,
//     b: 20
// }
// console.log(Object.entries(obj))


// Array to Object method 

// var objArr = [
//     ['a', 10],
//     ['b', 20]
// ]
// console.log(Object.fromEntries(objArr))




// const arr = [10, 22, 35]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

        // ITERATOR 

// Symbol.iterator 

// let iterate = arr[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// FOR OF LOOP 

// for (let v of arr) {
//     console.log(v)
// }

// for (let v of 'MONIRUL ISLAM') {
//     console.log(v)
// }

    // GENARATOR 

// function* generate(){
//     yield 1
//     yield 2 
//     yield 3
// }     
// let iterate = generate()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// for loop 
// function* generate(array) {
//     for (let i = 0; i < array.length; i++) {
//         yield array[i]
//     }
// }

// let it = generate([20, 15, 78])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

    //  set 

// let set = new Set([1, 2, 3])
// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)
// console.log(set)
// console.log(set.size)

// console.log(set.has(5))    

    // map  ]

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])

// map.set('d', 40)    
// console.log(map)
// console.log(map.get('c'))
// console.log(map.delete('a'))
// console.log(map)
// console.log(map.size)

// for loop 
// for (let [k, v] of map) {
//     console.log(v, k)
// }

// for each 
// map.forEach((v, k) => {
//     console.log(k, v)
// })

// WEAK MAP 

// let weakMap = new WeakMap([[a, 45], [b, 75]])

// a = null

// console.log(weakMap.get(a))
// console.log(weakMap.has(a))
// console.log(weakMap.has(b))



// ES6 CLASS 

// function Rectangle(width, height) {
//     this.width = width
//     this.height = height
// }

// Rectangle.prototype.draw = function () {
//     console.log(this)
//     console.log('Drawing...')
// }

// let rect1 = new Rectangle(12, 15)
// console.log(rect1);



// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//         this.another = function () {
//         }
//     }

//     name = 'Monirul Islam'

//     draw() {
//         console.log('Drawing...')
//     }
// }

// let rect2 = new Rectangle(45, 23)
// console.log(rect2)


// INHARITANCE


// class Shape {
//     constructor(color) {
//         this.color = color
//     }
//     draw() {
//         console.log('Drawing...')
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width
//         this.height = height
//     }

//     draw() {
//         console.log('Drawing a Rectangle....')
//     }

//     calculate() {
//         return this.width * this.height
//     }
// }



import Rectangle from "./Rectangle.js"


let r = new Rectangle('Green', 4, 5)
console.log(r)
r.draw()