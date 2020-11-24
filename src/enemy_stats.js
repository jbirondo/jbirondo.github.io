class EnemyStats {
    constructor(context) {
        this.context = context  
    }

    draw() {
        if (round === 0){
        null
        } else if (round % 5 === 0){
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Boss`, 10, 80)
            this.context.fillText(`Health: ${(10 * round )}`, 10, 110)
        }
        } else {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Enemy`, 10, 80)
            this.context.fillText(`Health: ${(10 * (1 + (0.25 * (round - 1))) )}`, 10, 110)
        }
    }
}

module.exports = EnemyStats;