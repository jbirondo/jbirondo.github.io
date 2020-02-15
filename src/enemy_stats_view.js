class EnemyStatsView {
    constructor(enemyStats, context) {
        this.context = context;
        this.enemyStats = enemyStats;
        this.grid = grid
    }

    animate(time) {
        const timeDelta = time - this.lastTime;
        this.enemyStats.draw(this.grid, this.context);
        this.lastTime = time;
        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = EnemyStatsView