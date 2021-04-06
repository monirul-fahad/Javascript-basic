// // // object 

// var point = {
//     x: 20,
//     y: 28,
//     z: 30
// }

// // console.log(point.y)
// // console.log(point.x + point.z)  //dot notetion.
// // console.log(point['y'])        // array notetion.
// // console.log(point['z']);


// // var obj = Object()
// // obj.a = 30
// // console.log(obj)

// // var obj2 = new Object()
// // obj2.b = 40
// // console.log(obj2)


// point.x = 55    //doted object add
// point.a = 14

// console.log(point)

// point['y'] = 110    // array object add
// var[prop] = 'z'
// point[prop] = 200

// console.log(point)

// point.a = undefined
// console.log(point)

// delete point.a 
// console.log(point)


         /*  object compare */

// var obj1 = {
//     a: 25,
//     b: 20
// }

// var obj2 = {
//     a: 25,
//     b: 20
// }

// if (obj1.a === obj2.a && obj1.b === obj2.b) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// // simple way to object compare.
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));



          // iterate

var obj = {
    x: 25,
    y: 29,
    z: 15
} 
// console.log('x' in obj)
// console.log('g' in obj)

for (var i in obj) {
    // console.log(i)
    console.log( i + ': ' + obj[i])
}

console.log(Object.keys(obj))   // object keys in an array
console.log(Object.values(obj))  // object values in an array
console.log(Object.entries(obj)) // every key & values in an array

// create new object from old object 
var obj1 = {
    x: 50,
    y: 40,
    z: 45
} 
console.log(obj1)
var obj2 = Object.assign({}, obj1)
obj2.x = 80
console.log(obj2)
