const Util = require("./util")

class MovingObject {
    constructor(x, y, dx, dy, radius, hp, color, game) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.game = game;
        this.hp = hp
        this.NORMAL_FRAME_TIME_DELTA = 1000 / 60
    }

    draw(context){
        let totalHp = (10 * (1 + (0.25 * (round - 1))))
        context.fillStyle = this.color;
        context.beginPath();
        debugger
        if (Math.floor(totalHp) !== Math.floor(this.hp)){
            context.arc(
                this.x, 
                this.y, 
                this.radius, 
                0, 
                (2 * Math.PI) * (totalHp % this.hp), 
                true
            );
        } else {
            context.arc(
                this.x,
                this.y, 
                this.radius, 
                0, 
                (2 * Math.PI), 
                true
            );
        }
        context.fill();

    }

    iscollideWith(otherObject) {
        const centerDist = Util.dist([this.x, this.y], [otherObject.x, otherObject.y]);
        return centerDist < (this.radius + otherObject.radius);
    }

    remove() {
        this.game.remove(this);
    };

}

module.exports = MovingObject