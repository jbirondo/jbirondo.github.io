class Instructions {
    constructor(context) {
        this.context = context
    }

    draw() {
        this.context.clearRect(0, 0, 900, 120)
        this.context.font = "20px Arial"
        this.context.fillText(`Welcome to JavaScript Tower Defense`, 20, 30);
        this.context.fillText(`Left click on a green tile to create a tower to defend the path`, 20, 60)
        this.context.font = "30px FontAwesome";
        this.context.fillStyle = "blue"
        this.context.fillText('\uf09b' + "github", 20, 90)
        this.context.strokeRect(20, 43, 120, 43)
        this.context.fillStyle = "red"
        this.context.fillText('\uf08c' + "LinkedIn", 150, 90)
        this.context.strokeRect(150, 43, 200, 43)
    }
}

module.exports = Instructions;