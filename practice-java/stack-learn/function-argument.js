     
     
     // Function
function functionName() {
    console.log("i'm a Function")
}

function add() {
    var a = 50
    var b = 23
    console.log(a+b)
}

function sub() {
    var a = 69
    var b = 41
    console.log(a-b)
}

// Now function call
functionName()

// Function call with ForLoop
// for (var i = 0; i < 10; i++) {
//     add()
// }
// console.log(add())


// arguments
// function add(a, b) {
//     var result = ( a + b)
//     console.log(result)
// }
// add (10,7)

// function sub(a, b) {
//     var result =(a-b)
//     console.log(result)
// }
// sub(56,22)


// array argument with forLoop

var arr1 =[5, 9, 3]
var arr2 =[15, 5, 12]
var arr3 =[10, 2, 36]

// sum1 = 0
// for (var i = 0; i < arr1.length; i++){
//     sum1 += arr1[i]
// }
// console.log(sum1)

// sum2 = 0
// for (var i = 0; i < arr2.length; i++){
//     sum2 += arr2[i]
// }
// console.log(sum2)

// sum3 = 0
// for (var i = 0; i < arr3.length; i++){
//     sum3 += arr3[i]
// }
// console.log(sum3)


// Argument with function

// function sumOfArray(arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)


// Sum total result of three student

var std1 = [75, 80, 66, 87, 79]
var std2 = [45, 78, 68, 91, 77]
var std3 = [91, 0, 96, 86, 89]

function sumOfResult(std) {
    var result = 0
    for (var i = 0; i < std.length; i++) {
        result += std[i]
    }
    console.log('Total result is ' + result);
}

sumOfResult(std1)
sumOfResult(std2)
sumOfResult(std3)



