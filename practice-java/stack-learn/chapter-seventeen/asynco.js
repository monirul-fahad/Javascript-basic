// console.log('I am line one')
// setTimeout(() => {
//     console.log('I am line two')
// }, 1000)
// setTimeout(() => {
//     console.log('I am line three')
// }, 5000)

// setTimeout(() => {
//     console.log('I am line four')
// }, 3000)
// setTimeout(() => {
//     console.log('I am line five')
// }, 0)
// console.log('I am line six')


// asyn function 

function sayMyName (name){
    let result
    setTimeout(() =>{
       result = name 
       console.log('i am three second late')    
    }, 3000)
}
let output = sayMyName('Monirul Fahad')
console.log(output)