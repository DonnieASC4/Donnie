var enemyArray;
// moves between 3 and -3
var directionCounter;
var isLeft;
var originalX;
var originalY;
var maxSquareWidth;
var maxSquareHeight;
var littleSpace;
var EnemyWidth;
var EnemyHeight;
var Enemy;
var Enemies;
var Size;
var heightSize;
function setup() {
    Size = 600;
    heightSize = 400;
    createCanvas(Size, Size);
    background(0);
    frameRate(2);
    var RectWidth = 360;
    var RectHeight = 225;
    originalX = 70;
    originalY = 50;
    maxSquareWidth = RectWidth / 10;
    maxSquareHeight = RectHeight / 5;
    littleSpace = maxSquareWidth / 18;
    EnemyWidth = maxSquareWidth - (2 * littleSpace);
    EnemyHeight = maxSquareHeight - (2 * littleSpace);
    Enemies = [];
    directionCounter = 1;
    isLeft = false;
    // Creates all of the enemies in browser and array
    // changed
    for (var i = 0; i < 3; i++) {
        Enemies[i] = [];
        for (var j = 0; j < 10; j++) {
            Enemies[i][j] = new EnemyClass(originalX + maxSquareWidth * (j) + littleSpace, originalY + maxSquareHeight * i + littleSpace, EnemyWidth, EnemyHeight, Size);
            Enemies[i][j].appear();
        }
    }

}





function RecreateEnemiesRight() {

    if(Enemies[Enemies.length -1][Enemies[0].length - 1].x + Enemies[Enemies.length -1][Enemies[0].length - 1].width +  7> Size) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                Enemies[i][j].MoveDown();
                Enemies[i][j].appear();
                
            }
        }
        isLeft = true;
    } else {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                Enemies[i][j].MoveRight();
                Enemies[i][j].appear();
            }
        }
    }
}

function RecreateEnemiesLeft() {
    
    if (Enemies[0][0].x -7 < 0) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                Enemies[i][j].MoveDown();
                Enemies[i][j].appear();
            }
        }
        isLeft = false;
    } else {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 10; j++) {
                Enemies[i][j].MoveLeft();
                Enemies[i][j].appear();
            }
        }
    }
}


function draw() {
    fill(0);
    rect(0, 0, width, height);
    if (isLeft == false) {
        RecreateEnemiesRight();
        //  delayTime(1);
    } else {
        RecreateEnemiesLeft();
        //    delayTime(1);

    }


}

