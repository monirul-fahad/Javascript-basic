// // Array 
// // var arr = ["Fahad", "shakib", "Imran", 2, 3, 4, 5]
// // console.log(arr)

// // console.log(arr[2])
// // console.log(arr[0])
// // console.log(arr[4])
// // console.log(arr[7])


// // traverse array 

// var arr = [4, 5, 1, 6, 8, 9, 40, 50]

// arr[0]
// arr[2]

// arr[arr.length - 1]

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     arr[i] = arr[i] + 2
// }

// console.log(arr)

// var sum = 0
// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

// console.log(sum)

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }

// console.log(Math.floor(4.9) );
// console.log(Math.floor(4.7) );
// console.log(Math.floor(4.4) );
// console.log(Math.floor(4.2) );
// console.log(Math.floor(-4.9) );

 
// // Insert and Remove

// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// // Insert 9 to index 3

// arr[3] = 9
// arr.push(9)
// arr.unshift(9)

// arr.splice(3, 0, 9, 10)

// arr[3] = undefined
// arr.pop()
// arr.shift()

// arr.splice(3, 1)

// arr.splice(3, 1, 44)

// console.log(arr)



// // Search Data

// var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27]

// var find = 555
// var isFound = false

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === find) {
//         console.log('Data Found at Index ' + i)
//         isFound = true
//         break;
//     } 
// }

// if (!isFound) {
//     console.log('Data Not Found')
// }


// MultiDimensional Array

// var arr = [
//     [78, 71, 80, 90],
//     [80, 75, 90, 86],
//     [71, 75, 79, 80]
// ]

// console.log(arr[0][0])
// console.log(arr[1][1])

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log('Element ' + i + ': ' + arr[i][j])
//     }
// }


// Reverse an Array
 
var arr = [1, 2, 3, 4, 5, 6, 7, 8]

for (var i = 0; i < (arr.length / 2); i++) {
    var index = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = index
}
console.log(arr)
// console.log(arr.reverse())


