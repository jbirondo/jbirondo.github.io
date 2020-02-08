class EnemyStats {
    constructor(context) {
        this.context = context  
    }

    num = 35;
    intvl = setInterval(function () { counter(ctx, num--); }, 1000);
    counter(num) {
        this.context.clearRect(0, 0, 300, 300)
        this.context.font = "20px Arial";
        this.context.fillText(`Round starts in:`, 10, 80)
        this.context.fillText(`${num}`, 10, 110)
        if (num == 0) {
            clearInterval(intvl);
        }
    } 

    draw() {
        if (round === 0){
            // this.context.clearRect(0, 0, 300, 300)
            // this.context.font = "20px Arial";
            // this.context.fillText(`Round starts in:`, 10, 80)
            // this.context.fillText(`${startTime}`, 10, 110)
            this.counter(num)
        } else {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Enemy`, 10, 80)
            this.context.fillText(`Health: ${(12 * (1 + (0.25 * (round - 1))) )}`, 10, 110)
        }
    }
}

module.exports = EnemyStats;