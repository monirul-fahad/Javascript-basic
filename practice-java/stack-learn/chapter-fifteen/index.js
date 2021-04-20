import '../styles/index.scss'

// var s = `    dsfsdfdsf

// sdfsdfsdf

// sfdssfd 
//     rsfdsfsdf sddsfds`

// console.log(s.trim())

// var age = 23
// var name = 'HM Nayem'

// console.log('My name is ' + name + ' and I am ' + age + ' years old') 
// console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not ' : ''}adult`)

// console.log(name.padStart(15, '*'))
// console.log(name.padEnd(15, 'a'))
// console.log('S'.repeat(10))

// var vs let vs const

// if (true) {
//     let a = 10
// }

// // console.log(a)

// for (let i = 0; i < 5; i++) {
    
// }

// console.log(i)

// {
//     let iAmLet = 'I am Let'
// }

// console.log(iAmLet)

// (function () {
//     var abc = 'ABC'
//     console.log(abc)
// })()

// console.log(abc)

{

}

// function add(a, b) {
//     return a + b
// }

// let add = (a, b) => a + b
// console.log(add(45, 50))

// let sqr = x => x * x

// function testMe() {
//     console.log(this)
// }

// testMe.call({})

// let obj = {
//     name: 'HM Nayem',
//     print: () => {
//         console.log(this)
//     }
// }


// obj.print()

// let obj = {
//     name: 'HM Nayem',
//     print: function () {
//         setTimeout(() => {
//             console.log(this)
//             console.log(`Hello, ${this.name}`)
//         }, 1000)
//     }
// }

// obj.print()

// function sqr(n=1) {
//     return n*n
// }

// console.log(sqr())

// function greet(name = 'HM Nayem', msg = 'Hello') {
//     console.log(name.length)
//     console.log(`${msg}! ${name}`)
// }

// greet(null, 'Hello')

// function sum(...rest) {
//     return rest.reduce((a,b) => a + b)
// }

// console.log(sum(1, 2, 3 , 4 , 5))

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

// let a = 10, b = 20

// let obj = {
//     a,
//     b,
//     print() {
//         console.log(this)
//     }
// }

// obj.print()

// var person = {
//     name: 'HM Nayem',
//     email: 'hasan.m.nayem@gmail.com',
//     address: {
//         city: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }

// let { name, email, address, address: {city, country} } = person
// console.log(name, email, city, country)
// let arr = [1, 2, 3, 4, 5]

// let [first, second, , ,last] = arr

// console.log(first, second, last)

// var obj = {
//     a: 10,
//     b: 20
// }

// console.log(Object.entries(obj))

// var objArr = [
//     ['a', 10],
//     ['b', 20]
// ]

// console.log(Object.fromEntries(objArr))


// let s1 = Symbol()
// let s2 = Symbol('test symbol')

// console.log(s1)
// console.log(s2)

// console.log(s1 === s2)

// let toss = {
//     HEAD: Symbol('HEAD'),
//     TAIL: Symbol('TAIL')
// }

