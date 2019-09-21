class ScoreView {
    constructor(score, context) {
        this.context = context;
        this.score = score;
    }

    animate(time) {
        this.score.draw();
        this.lastTime = time;
        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = ScoreView;