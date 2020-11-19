const Enemy = require("./enemy")

class Boss extends Enemy {
    constructor(x, y, dx, dy, radius, color, game){
        super(x, y, dx, dy, radius, color, game)
        
    }
}

module.exports = Boss