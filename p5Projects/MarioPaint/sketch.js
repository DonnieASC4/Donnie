var canvas;
var shape;

function setup() {
    canvas = createCanvas(300,300);
    background(200);
    // happens when the mouse clicks the canvas.
    canvas.mouseClicked(RandomShape);
}

// Changes the color (Happens when the mouse clicks a shape)
function mouseClicked() {
    shape.mouseClicked(ColorChange);
    
}

// Starts out with a ellipse
function RandomShape() {
    shape = ellipse(mouseX, mouseY, random(30, 150), random(30, 150));
}


