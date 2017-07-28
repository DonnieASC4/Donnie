function EnemyClass(x, y, width, height, canvasSize) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isShowing = true;
    this.isLeft = false;
    
    this.appear= function() {
        fill(255,0,0);
        rect(this.x, this.y, width, height);
    }
    this.MoveRight = function() {
        this.x+=7;
        return this.x;
    }
    this.MoveLeft = function() {
        this.x-=7;
        return this.x;
    }
    this.MoveDown = function() {
        this.y+=7;
        return this.y;
    }
}