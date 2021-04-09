
// PURE FUNCTION 

 // `* It Returns the same result if given the same arguments`
 // `* It does not cause any observable side effects`

function sqr(n) {
    return (n*n)
}         //This one is pure function.
console.log(sqr(4));
console.log(sqr(2));
console.log(sqr(3));
console.log(sqr(5));



var n = 10
function change() {
    n = 100
}         //This one isn't pure function
change()
console.log(n)



var point = {
    x: 45,
    y: 30
}
function printPoint(point) {
    point.x = 100
    point.y = 200

    console.log(point)
}             //This isn't a pure function.
printPoint(point)
console.log(point)