// Array 
// var arr = ["Fahad", "shakib", "Imran", 2, 3, 4, 5]
// console.log(arr)

// console.log(arr[2])
// console.log(arr[0])
// console.log(arr[4])
// console.log(arr[7])


// traverse array 

var arr = [4, 5, 1, 6, 8, 9, 40, 50]

arr[0]
arr[2]

arr[arr.length - 1]

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    arr[i] = arr[i] + 2
}

console.log(arr)

var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}

console.log(sum)

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])
    }
}

console.log(Math.floor(4.9) );
console.log(Math.floor(4.7) );
console.log(Math.floor(4.4) );
console.log(Math.floor(4.2) );
console.log(Math.floor(-4.9) );

 