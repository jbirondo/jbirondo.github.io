const Tower = require("./tower")
const Enemy = require("./enemy")

class Stats {
    constructor(context) {
        this.context = context
    }

    draw(object = null) {
        if (object instanceof Tower) {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Tower`, 10, 80)
            this.context.fillText(`Range: ${object.range}`, 10, 110)
            this.context.fillText(`Damage: ${object.dmg}`, 10, 140)
        } 
        // else if (object instanceof Enemy) {
        //     this.context.clearRect(0, 0, 300, 300)
        //     this.context.font = "20px Arial";
        //     this.context.fillText(`Enemy`, 10, 80)
        //     this.context.fillText(`Speed: ${object.speed}`, 10, 110)
        //     this.context.fillText(`Health: ${object.hp}`, 10, 140)
        // }
    }
}

module.exports = Stats;