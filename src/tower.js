class Tower {
    constructor(row, col, canvas) {
        this.row = row;
        this.col = col;
        this.range = 4 * tileSize
        this.dmg = .02
        this.firingRate = 50
        this.canvas = canvas
        this.context = this.canvas.getContext("2d")
        this.stage = "Pawn"
    }

    draw(context) {
        // context.fillStyle = "red"
        // context.strokeRect(this.row * tileSize, this.col * tileSize, tileSize, tileSize);
        // context.fillRect(this.row * tileSize, this.col * tileSize, tileSize, tileSize);
        if (this.stage === "Pawn") {
            context.font = "14px Arial"
            context.fillText("♟", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
        } else if (this.stage === "Knight") {
            context.font = "14px Arial"
            context.fillText("♞", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
        }
    }

    upgrade(){
        if (this.stage === "Pawn"){
            this.stage = "Knight"
            this.dmg = 5
        }
    }

    inRange(enemy) {
        const a = enemy.x - ((this.row * 20) + 10) 
        const b = enemy.y - ((this.col * 20) + 10) 
        const dist = Math.sqrt(Math.pow(a , 2) + Math.pow(b, 2))
        if (dist < this.range) {
            return true
        } else {
            return false
        }
    }

    fireProjectile(enemy) {
        if (this.inRange(enemy) === true) {
			this.context.lineWidth = 1
			this.context.strokeStyle = "black"
			this.context.beginPath()
			this.context.moveTo(((this.row * 20) + 10), ((this.col * 20) + 10))
			this.context.lineTo(enemy.x, enemy.y)
            this.context.stroke();
            
            enemy.hp -= this.dmg

            if (enemy.hp <= 0) {
                enemy.remove()
                score++
            }
        }
    }
}

module.exports = Tower