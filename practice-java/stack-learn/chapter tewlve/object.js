alert('I am learning JavaScript')

var rect = {
    width: 100,
    height: 50,

    draw: function() {
        console.log('i am a rectangle')
        this.printProperties()
    },
    printProperties: function() {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }

}
rect.draw()


var another = {
    width: 87,
    height:45,
    print: rect.printProperties
}

another.print()