class EnemyStats {
    constructor(context) {
        this.context = context  
    }

    draw() {
        if (round === 0){
            let a = Date.now()
            let countdown = Math.floor((startTime - a) / 1000)
            let statusBar = Math.floor(countdown % 35)
            debugger
            if(countdown > 1){
                this.context.clearRect(0, 0, 300, 300)
                this.context.font = "20px Arial";
                this.context.fillText(`Round starts in:`, 10, 80)
                this.context.fillText(`${countdown} seconds`, 10, 110)
                this.context.fillRect(50, 50, statusBar * 3, 20)
            // } else if (countdown === 1) {
                // this.context.clearRect(0, 0, 300, 300)
                // this.context.font = "20px Arial";
                // this.context.fillText(`Round starts in:`, 10, 80)
                // this.context.fillText(`${countdown} second`, 10, 110)
                // this.context.fillRect(50, 50, 50, 50)
            // } else if (countdown < 1){
                // this.context.clearRect(0, 0, 300, 300)
                // this.context.font = "20px Arial";
                // this.context.fillText(`Round starts`, 10, 80)
                // this.context.fillText(`NOW!`, 10, 110)
                // this.context.fillRect(50, 50, 50, 50)
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