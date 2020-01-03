class InstructionsView {
    constructor(instructions, context) {
        this.context = context;
        this.instructions = instructions;
    }

    animate(time) {
        this.instructions.draw();
        this.lastTime = time;
        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = InstructionsView;