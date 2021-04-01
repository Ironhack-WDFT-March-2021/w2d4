// this sets up the canvas
function setup() {
    createCanvas(1000, 600);
}
let x = 500
let speed = 3;
function draw() {
    // console.log('drawing 🙃')

    // rectangle - (x, y, width, height)
    // fill(0, 256, 0);
    // rect(100, 100, 50, 50);
    // rect(200, 200, 50, 50);
    // fill(0, 0, 256);
    // rect(400, 400, 50, 50);

    // set a context by using push and pop
    // push()
    // stroke('red')
    // fill('red')
    // circle - (x, y, radius)
    // circle(500, 300, 50)
    // pop()

    // line - (xStart, yStart, xEnd, yEnd)
    // stroke('yellow')
    // line(0, 100, 1000, 100)
    // line(0, 300, 1000, 300)

    // this cears the canvas
    clear()
    x += speed
    if ((x + 50) > 1000) {
        // console.log('elvis left the building')
        // change direction
        speed = - 3;
    }
    circle(x, 200, 50)
    // console.log(mouseX, mouseY)
}

// this is used to preload assets - p 5 calls that function
function preload() {
    loadImage('gustavo.png')
}