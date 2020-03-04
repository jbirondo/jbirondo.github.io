class Score {
    constructor(context) {
        this.context = context
    }

    draw() {
        let a = Date.now()
        let countdown = Math.floor((startTime - a) / 1000)
        let statusBar = Math.floor(countdown % 35)
        this.context.clearRect(0, 0, 300 , 100);
        this.context.font = "20px Arial";
        this.context.fillText(`Score: ${score}`, 10, 20);
        this.context.fillText(`Lives: ${lives}`, 10, 50);
        this.context.fillText(`Round: ${round}`, 10, 80);
        this.context.beginPath();
        this.context.arc(
            120,
            30,
            30,
            0,
            (2 * Math.PI) * (1 + (-1 * (countdown / 35))),
            true
        );
        this.context.stroke()
    }
}

module.exports = Score;