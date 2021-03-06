const Tower = require("./tower")


class Stats {
    constructor(context, object = null) {
        this.context = context
        this.object = object
    }

    draw(object) {
        if (object instanceof Tower) {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillStyle = "black"
            this.context.fillText(`${object.stage} Tower`, 10, 80)
            this.context.fillText(`Damage: ${object.dmg}`, 10, 140)

            if (["Pawn", "Knight", "Bishop", "Rook", "Queen"].includes(object.stage)){
                this.context.fillStyle = "blue"
                this.context.fillText(`Upgrade`, 14, 40)
                this.context.strokeStyle = "blue"
                this.context.strokeRect(10, 23, 85, 23);
                this.context.fillStyle = "red"
                this.context.fillText(`Sell`, 104, 40)
                this.context.strokeStyle = "red"
                this.context.strokeRect(100, 23, 40, 23);
                this.context.fillStyle = "black"
                this.context.fillText(`Upgrade cost: ${object.upgradeCost}`, 10, 110)
            } else {
                this.context.fillStyle = "red"
                this.context.fillText(`Sell`, 104, 40)
                this.context.strokeStyle = "red"
                this.context.strokeRect(100, 23, 40, 23);
            }
        } 
    }
}

module.exports = Stats;