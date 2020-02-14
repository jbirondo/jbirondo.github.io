class EnemyStats {
    constructor(context) {
        this.context = context  
    }
    
    // countdown() {
    //     let num = 35
    //     setInterval(() => {
    //         console.log(num)
    //         num--
    //     }, 1000);
    // }

    draw() {
        // debugger

        if (round === 0){
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Round starts in:`, 10, 80)
            this.context.fillText(`${startTime} seconds`, 10, 110)
            // startTime--
            // this.countdown()
        } else {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Enemy`, 10, 80)
            this.context.fillText(`Health: ${(12 * (1 + (0.25 * (round - 1))) )}`, 10, 110)
        }
    }
}

module.exports = EnemyStats;