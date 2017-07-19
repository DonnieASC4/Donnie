function setup() {
    createCanvas(400, 400);
    background(200);
}

// If you hit a wall change directions. Meaning the increments change by the negative value.
// Have the ball move first.
var xLocation = 140;
var xDistance = 34;
var yLocation = 34;
var yDistance = 432;
var radius = 25;
var vx = 0;
var vy = 0

// Bounces off walls
function draw() {
    background(200);
    ellipseMode(RADIUS);
    ellipse(xLocation, yLocation, 25);
    fill(random(255), random(255), random(255));
    if (xLocation + radius >= width) {
        xDistance = - (random(14, 17) + vx);
        vx+=5;
    }
    if (xLocation - radius <= 0) {
        xDistance = random(14, 17) + vx;
        vx+=5;
    }
    xLocation = xLocation + xDistance;
    if (yLocation + radius >= height) {
        yDistance = -(random(14, 17) + vy)
        vy+=5;
    }
    if (yLocation - radius <= 0) {
        yDistance = random(14, 17) + vy;
        vy+=5;
    }
    yLocation = yLocation + yDistance;
}