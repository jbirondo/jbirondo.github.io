class GameView {
    constructor(game, context){
        this.context = context;
        this.game = game;
        this.grid = grid
    }

    animate(time) {
        const timeDelta = time - this.lastTime;
        // this.game.step(timeDelta);
        this.game.draw(this.grid, this.context);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        if( lives > 0 ) {
            setTimeout(() => {
                this.game.play()
            }, 40000);
        }

        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = GameView;