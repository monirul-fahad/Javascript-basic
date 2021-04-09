
  // First Class Function

function add(a, b) {
    return a+b
}
// 1. A Function can be Stored in a Variable\
var sum = add
console.log(sum(12,6))

// 2. A Function can be Stored in an Array
var arr  = []
arr.push(add)
console.log(arr)
console.log(arr[0](14,5));

// 3. A Function can be Stored in an Object
var obj  = {
   sum: add  
}
console.log(obj)
console.log(obj.sum(12,5))

// 4. We can Create Function as Need
setTimeout(function(){
    console.log('I have created .......' )
}, 500)


// 5. We can Pass Function as an Arguments
function add(a, b) {
    return a+b
}
function manipulate(a, b, func) {
    var c = a + b
    var d = a - b
    // function multiply() {
    //     var m = func(a, b)
    //     return c*d*m
    // }
    return function() {
        var m = func(a, b)
        return c*d*m
    }
}
var multiply = manipulate(3, 4, add)
console.log(multiply())


// 6. We can return Functions from Another Function

// First Look at Closure

var b = 10

function a() {
    var x = 5
    
    return function () {
        console.log(x)
    }
}

var abc = a()
console.dir(abc)