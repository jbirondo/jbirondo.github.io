class StatsView {
    constructor(stats, context) {
        this.context = context;
        this.stats = stats;
    }

    animate(time) {
        this.stats.draw();
        this.lastTime = time;
        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = StatsView;