class GameView {
    constructor(game, context){
        this.context = context;
        this.game = game;
        this.grid = grid
    }

    animate(time) {
        const timeDelta = time - this.lastTime;
        this.game.draw(this.grid, this.context);
        this.lastTime = time;
        if(this.game.roundOver()){
            console.log("hello")
        }
        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        if( lives > 0 && this.game.enemies.length === 0) {
            this.game.play()
        }
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = GameView;