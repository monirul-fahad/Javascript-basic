
        // ERROR HANDLING 

// using if-else 
function changeToInt(v){
    let result =Number.parseInt(v)
    if (!result){
        return 'Please provide a value which is able to convert in to Integer.'
    }
    return result
}
let result = changeToInt('monirul fahad')
console.log(result)


// try-catch error 
function makeWords(text){
    try {
        let str = text.trim()
        let words = str.split(' ')
        return words
    } catch (error) {
        console.dir(error.message)
    }
}
let word = makeWords(85)
console.log(word)

//   throw error 
try {
    console.log('I am  Monirul Fahad')
    console.log('I am form Bangladesh')
    throw new Error('im the error')
    console.log('I live in Dhaka')
    
} catch (error) {
    console.log(error.message)
} finally {
    console.log('i am visible even after error.')
}