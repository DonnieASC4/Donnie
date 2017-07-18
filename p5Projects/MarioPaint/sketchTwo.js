var BlueRectangle;
var RedRectangle;
var YellowRectangle;
var color;

 

function setup() {
    canvas = createCanvas(300,300);
    background(200);
    fill(0,0,235);
    BlueRectangle = quad(0,0,0,YDISPLACEMENT, width, YDISPLACEMENT, width, 0);
    RedRectangle = quad(0, YDISPLACEMENT, 0, 2*YDISPLACEMENT, width, YDISPLACEMENT, width, 2*YDISPLACEMENT);
    YellowRectangle = quad(0, 2*YDISPLACEMENT, 0, 3*YDISPLACEMENT, width, 2*YDISPLACEMENT, width, 3*YDISPLACEMENT);
}

const YDISPLACEMENT = 30;

function mouseClicked() {
    if (mouseY >= 0 && mouseY <=YDISPLACEMENT) {
        color = 0;
    } else if ()
}