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
        if( lives > 0 && this.game.enemies.length === 0) {
            this.game.play()
        } else {
            alert("Game over. Try again.")
        }
        console.log("hello from gave_view start")
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = GameView;