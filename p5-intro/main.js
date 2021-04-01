class Player {
    constructor() {
        this.x = 500;
        this.y = 500;
        this.width = 100;
        this.height = 100;
        this.image;
    }
    draw() {
        // p 5 method constrain to create a valid range
        // width is the width of the canvas that is created on setup
        this.x = constrain(this.x, 0, (width - 100))
        image(this.image, this.x, this.y, this.width, this.height);
        // if we wanna listen for key down we have to do it in the draw function
        // is 'w' pressed down
        if (keyIsDown(87)) {
            this.moveUp()
        }
        // is 's' pressed down
        if (keyIsDown(83)) {
            this.moveDown()
        }// is 'a' pressed down
        if (keyIsDown(65)) {
            this.moveLeft()
        }// is 'd' pressed down
        if (keyIsDown(68)) {
            this.moveRight()
        }
    }
    moveUp() {
        this.y -= 10;
    }
    moveDown() {
        this.y += 10;
    }
    moveLeft() {
        this.x -= 10;
    }
    moveRight() {
        this.x += 10;
    }
}

class Game {
    constructor() {
        this.player = new Player();
    }

    preload() {
        // this is to load the image
        this.player.image = loadImage('gustavo.png');
    }
    drawGame() {
        // to clear the canvas every frame
        clear()
        this.player.draw()
    }
}


const game = new Game();

// all the following functions are functions that p5 calls automatically

function preload() {
    game.preload();
}

function setup() {
    createCanvas(1000, 600)
}

function draw() {
    game.drawGame()
}

function keyPressed() {
    // if we press up we wanna move the player up
    if (keyCode === 38) {
        game.player.moveUp()
    }
    if (keyCode === 40) {
        game.player.moveDown()
    }
    if (keyCode === 37) {
        game.player.moveLeft()
    }
    if (keyCode === 39) {
        game.player.moveRight()
    }
}