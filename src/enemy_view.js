class EnemyView {
    constructor(enemy, context) {
        this.context = context;
        this.enemy = enemy;
        this.grid = grid
    }

    animate(time) {
        const timeDelta = time - this.lastTime;
        this.enemy.draw(this.grid, this.context);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = EnemyView