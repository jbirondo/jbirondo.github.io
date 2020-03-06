const Tower = require("./tower")


class Stats {
    constructor(context) {
        this.context = context
    }

    draw(object = null) {
        if (object instanceof Tower) {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Coords : x:${object.row} y:${object.col}`, 10, 20)
            this.context.fillText(`${object.stage} Tower`, 10, 80)
            this.context.fillText(`Range: ${object.range}`, 10, 110)
            this.context.fillText(`Damage: ${object.dmg}`, 10, 140)
            if (object.stage === "Pawn") {
                this.context.strokeStyle = "black"
                this.context.strokeText(`Upgrade`, 14, 40)
                this.context.fillStyle = "blue"
                this.context.fillRect(10, 23, 85, 22);
            }
            // this.context.fillRect(this.row * tileSize, this.col * tileSize, tileSize, tileSize);
        } 
    }
}

module.exports = Stats;