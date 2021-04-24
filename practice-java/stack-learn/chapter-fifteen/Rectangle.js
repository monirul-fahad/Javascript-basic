// import Shape from "./Shape"

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width
//         this.height = height
//     }

//     draw() {
//         console.log('Drawing a Rectangle....')
//     }

//     calculate() {
//         return this.width * this.height
//     }
// }

// export default Rectangle;
import Shape from "./Shape"
class Rectangle extends Shape {
    draw() {
            console.log('Drawing a Rectangle....')
       }
}

export default Rectangle;