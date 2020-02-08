class EnemyStats {
    constructor(context) {
        this.context = context  
    }

    draw() {
        if (round === 0){
            let time = 35
            setInterval(() => {
                this.context.clearRect(0, 0, 300, 300)
                this.context.font = "20px Arial";
                this.context.fillText(`Round starts in:`, 10, 80)
                this.context.fillText(`${time}`)
                time--
            }, 1000);
        } else {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Enemy`, 10, 80)
            this.context.fillText(`Health: ${(12 * (1 + (0.25 * (round - 1))) )}`, 10, 110)
        }
    }
}

module.exports = EnemyStats;