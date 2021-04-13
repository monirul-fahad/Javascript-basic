
    //   for Each 

var arr = [1, 2, 3, 4, 5]

// var sum =0 
// arr.forEach(function(value, index, arr){
//     // console.log(value, index, arr)
//     sum += value 
// })
// console.log(sum)

function forEach (arr, cb) {
    for (var i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        cb(arr[i], i , arr)
    }
}

var sum=0
forEach(arr, function(value, index, Array){
    console.log(value, index, Array)
    sum += value
})
console.log(sum);

forEach(arr, function (value, index, Array){
    arr[index] = value + 5
})
console.log(arr)


    // Map function

    var  arr = [1, 2, 3, 4, 5]

    // var sqrArr = arr.map(function(value){
    //     return value * value
    // })
    // console.log(arr)
    // console.log(sqrArr)

    function myMap(arr, cb) {
        var newArr = []
        for (var i = 0; i < arr.length; i++) {
            var temp = cb(arr[i], i, arr)
            newArr.push(temp)
        }
        return newArr
    }
    
    // console.log(myMap(arr))
    
    var qb = myMap(arr, function (value) {
        return value * value * value
    })
    
    var mten = myMap(arr, function (value) {
        return value * 10
    })
    
    console.log(arr)
    console.log(qb)
    console.log(mten)
    

        // Filter Function

 var arr = [4, 8, 1, 3, 5, 6, 7, 9 ]       

// var filterArr = arr.filter(function(value){
//     return value % 2 === 1
// })
// console.log(filterArr)

function myFilter (arr, cb) {
    var newArr = []
    for (var i = 0;  i < arr.length;  i++) {
        if (cb (arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

console.log(myFilter(arr, function(value){
    return value % 2 === 1
}))

console.log(myFilter(arr, function(value){
    return value > 4
}))



// Reduce Function 

var arr = [67, 1, 2, 45, 3, 4, 5]

// var sum = arr.reduce(function (prev, curr) {
//     return prev + curr
// }, 100)

// var max = arr.reduce(function (prev, curr) {
//     return Math.max(prev, curr)
// }, 0)

// console.log(sum)
// console.log(max)

function myReduce(arr, cb, acc) {

    for (var i = 0; i < arr.length; i++) {
        acc = cb (acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 0)

var max = myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr)
}, 0)

var min = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr)
}, arr[0])

console.log(sum, max, min)




// find & findindex function 

var arr = [1, 6, 8, 4, 7, 5, 2, 3, 9]

// var result = arr.find(function (value) {
//     return value === 9
// })

// console.log(result)

// var result = arr.findIndex(function (value) {
//     return value === 9
// })
// console.log(result)

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i]
            // return i
        }
    }
}

var result = myFind(arr, function(value) {
    return value === 9
})

console.log(result)