const Enemy = require("./enemy")

class Boss extends Enemy {
    constructor(x, y, dx, dy, radius, color, game){
        super(x, y, dx, dy, radius, color, game)
        this.speed = 3;
        this.dx = 2
        this.dy = 2
        this.radius = 60
        this.hp = 10 * round
        this.game = game
        this.color = "blue"
        this.bounty = round * round
    }
}

module.exports = Boss