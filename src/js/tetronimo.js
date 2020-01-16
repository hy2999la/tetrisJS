class Tetronimo {
    x;
    y;
    tet;
    color;
    shape;

    constructor(id) {
        this.shape = TETRONIMOES[id];
        this.color = COLORS[id];
    }

    spawn(ctx) {
        this.x = 3;
        this.y = 0;
        this.draw(ctx);
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        for (var i = 0; i < this.shape.length; i++) {
            for (var j = 0; j < this.shape[i].length; j++) {
                if (this.shape[i][j]) {
                    console.log("Drawing in: " + this.x + j + " " + this.y + i);
                    ctx.fillRect(this.x + j, this.y + i, 1, 1);
                }
            }
        }
    }

    rotate() {

    }

    hardDrop() {

    }

    softDrop() { 
        
    }
}