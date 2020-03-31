class Instructions {
    constructor(context) {
        this.context = context
    }

    draw() {
        this.context.clearRect(0, 0, 900, 80)
        this.context.font = "20px Arial";
        this.context.fillText(`Welcome to JavaScript Tower Defense`, 20, 30);
        this.context.fillText(`Left click on a green tile to create a tower to defend the path`, 20, 60)

    }
}

module.exports = Instructions;