class Score {
    constructor(context) {
        this.context = context
    }

    draw() {
        let a = Date.now()
        let countdown = Math.floor((startTime - a) / 1000)
        let statusBar = Math.floor(countdown % 35)
        if (round === 0){
            this.context.clearRect(0, 0, 300 , 100);
            this.context.font = "15px Arial";
            this.context.fillText(`Score: ${score}`, 120, 20);
            this.context.fillText(`Lives: ${lives}`, 120, 50);
            this.context.fillText(`Prepare!`, 25, 50);
            this.context.beginPath();
            this.context.arc(
                50,
                50,
                40,
                0,
                (2 * Math.PI) * (1 + (-1 * (countdown / 35))),
                true
            );
            this.context.stroke()
        } else {
            this.context.clearRect(0, 0, 300 , 100);
            this.context.font = "15px Arial";
            this.context.fillText(`Score: ${score}`, 120, 20);
            this.context.fillText(`Lives: ${lives}`, 120, 50);
            this.context.fillText(`Wave`, 25, 50);
            this.context.fillText(`${round}`, 50, 70)
            this.context.beginPath();
            this.context.arc(
                50,
                50,
                40,
                0,
                (2 * Math.PI) * (1 + (-1 * (countdown / 35))),
                true
            );
            this.context.stroke()
        }
    }
}

module.exports = Score;