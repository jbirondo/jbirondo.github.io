const Game = require('./game')

class Tower {
    constructor(row, col, canvas) {
        this.row = row;
        this.col = col;
        this.range = 4 * tileSize
        this.dmg = 1
        this.firingRate = 50
        this.canvas = canvas
        this.context = this.canvas.getContext("2d")
        this.stage = "Pawn"
        this.cost = 5
        this.upgradeCost = 30
    }

    draw(context) {
        context.fillStyle = "black"
        context.globalAlpha = 1
        switch (this.stage) {
            case "Pawn":
                context.font = "16px Arial"
                context.fillText("♟", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
                break
            case "Knight":
                context.font = "16px Arial"
                context.fillText("♞", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
                break
            case "Bishop":
                context.font = "16px Arial"
                context.fillText("♝", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
                break
            case "Rook":
                context.font = "16px Arial"
                context.fillText("♜", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
                break
            case "Queen":
                context.font = "16px Arial"
                context.fillText("♛", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
                break
            case "King":
                context.font = "16px Arial"
                context.fillText("♔", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
                break
        }
    }

    upgrade(){
        if (this.upgradeCost <= money) {
            money -= this.upgradeCost;
            if (this.stage === "Pawn"){
                this.stage = "Knight"
                this.dmg = 8
                this.upgradeCost = 100
            } else if (this.stage === "Knight"){
                this.stage = "Bishop"
                this.dmg = 33
                this.upgradeCost = 250
            } else if (this.stage === "Bishop"){
                this.stage = "Rook"
                this.dmg = 100
                this.upgradeCost = 500
            } else if (this.stage === "Rook"){
                this.stage = "Queen"
                this.dmg = 250
                this.upgradeCost = 5000
            } else if (this.stage === "Queen"){
                this.stage = "King"
                this.dmg = 1766
            }
            this.playSound('click.wav')
        }
        return this
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
        if (this.inRange(enemy) === true && enemy.hp > 0) {
            this.context.lineWidth = 1
            this.context.strokeStyle = "black"
            this.context.beginPath()
            this.context.globalAlpha = 1
            this.context.moveTo(((this.row * 20) + 10), ((this.col * 20) + 10))
            this.context.lineTo(enemy.x, enemy.y)
            this.context.stroke();
            
            enemy.hp -= (this.dmg / 60)

            if (enemy.hp <= 0) {
                enemy.remove()
            }

        }
    }

    playSound(file){
        let sound = new Audio(file).play()
        if (sound !== undefined){
            sound.then(() => {

            }).catch((error) => {
                console.log(error)
            })
        }
    }
}

module.exports = Tower