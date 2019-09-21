class Score {
    constructor(context) {
        this.context = context
    }

    draw() {
        this.context.clearRect(0, 0, 300 , 100)
        this.context.font = "20px Arial";
        this.context.fillText(`Score: ${score}`, 10, 20);
        this.context.fillText(`Lives: ${lives}`, 10, 50)
    }
}

module.exports = Score;