// loop

// for (var i = 0; i < 5; i++){
//     console.log('Monirul Fahad')
// }

// for (var i = 0; i < 5; i++){
//     console.log((i+ 1) + ' Monirul Fahad')
// }

// for(var i = 1; i <= 50; i++  ){
//     if (i % 2 == 1 ) {
//         console.log(i)
//     }
// }
// for (var i = 1; i <=50; i++ ){
//     if (i % 2 == 0){
//         console.log(i)

//     }
// }

var sum = 0;
for (var i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum+i))
    // sum += i
    sum = sum + i
}

console.log('Total: ' + sum)



// whileloop


// var i = 0
// while (i < 10) {
//     console.log('Monirul Fahad')
//     i++
// }

// var isRunning = true

// while (isRunning) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand === 9) {
//         console.log('Winner Winner Chicken Dinner')
//         isRunning = false
//     } else {
//         console.log('You have got ' + rand)
//     }
// }


// break

// while (true) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand === 9) {
//         console.log('Winner Winner Chicken Dinner')
//         break
//     } else {
//         console.log('You have got ' + rand)
//     }
// }

// for (var i = 1; i < 10; i++) {
//     if (i % 5 === 0) {
//         break
//     } else {
//         console.log(i)
//     }
// } 


// Continue Statement

// for (var i = 0; i < 10; i++) {
//     if (i === 3 || i === 7) {
//         continue
//     } else {
//         console.log(i)
//     }
// }