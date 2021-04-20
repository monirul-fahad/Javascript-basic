
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

let add = (a, b) => a + b
console.log(add(45,50))

// when one peramiter 

let double = n => n*n 
console.log(double(5))

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

let person = {
    name: 'Monirul Islam',
    email: 'immonirulfahad@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

let { name, email, address, address: {city, country} } = person
console.log(name, email, city, country)

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
