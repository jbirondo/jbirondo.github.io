class EnemyStats {
    constructor(context) {
        this.context = context  
    }
    counter(ctx, num) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "75px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("" + num, canvas.width / 2, canvas.height / 2);
        if (num == 0) {
            clearInterval(intvl);
        }
    } 

    draw() {
        if (round === 0){
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Round starts in:`, 10, 80)
            setInterval(() => {
                this.context.fillText(`${startTime}`, 10, 110)
                startTime--
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