class Instructions {
    constructor(context) {
        this.context = context
    }

    draw() {
        this.context.clearRect(0, 0, 900, 200)
        this.context.font = "20px Arial";
        this.context.fillText(`Welcome to JavaScript Tower Defense`, 10, 20);
        this.context.fillText(`Left click on a green tile to create a tower to defend the path`, 10, 50)
    }
}

module.exports = Instructions;