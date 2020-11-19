const Enemy = require("./enemy")

class Boss extends Enemy {
    constructor(x, y, dx, dy, radius, color, game){
        super(x, y, dx, dy, radius, color, game)
        this.speed = 3;
        this.hp = 10 * round * round
        this.game = game
        this.bounty = round * round
    }
}

module.exports = Boss