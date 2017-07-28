 var array = [];
 var turn = 0;
 var starter = 1;

function setup() {
    createCanvas(801, 801)
    stroke("black")
    rect(0, 0, width - 1, height - 1)
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            rect(i * 100, j * 100, 100, 100)
        }
    }
    for (var k = 0; k < 8; k++) {
        array[k] = [];
        for (var h = 0; h < 8; h++) {
            array[k][h] = false;
        }
    }

}


function mouseClicked() {
    // change coordinate into index
    //get boolean
    // change back into coordinate
    var X = mouseX;
        //gives index
        X = Math.floor(X / 100);
        var Y = mouseY;
        Y = Math.floor(Y / 100);
        var newXCoordinate = X * 100;
        var newYCoordinate = Y * 100;
        rectMode(CORNER);
        console.log("I made it", Y, X);
    if (starter == 1) {
        fill(100);
        rect(newXCoordinate, newYCoordinate, 100, 100);
        array[Y][X] = true;

    }

    if (turn == 1) {
        if (array[Y][X] == false) {
            fill(0, 0, 255);
            rect(newXCoordinate, newYCoordinate, 100, 100);
        } else {
        fill(255, 0, 0);
            rect(newXCoordinate, newYCoordinate, 100, 100);

    }
}


}