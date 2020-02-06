class EnemyStats {
    constructor(context, enemy) {
        this.context = context
        this.enemy = enemy
        this.hp = enemy.hp
        this.speed = enemy.speed    
    }

    draw() {
        // this.context.clearRect(0, 0, 300, 100)
        // this.context.font = "20px Arial";
        // this.context.fillText(`Score: ${score}`, 10, 20);
        // this.context.fillText(`Lives: ${lives}`, 10, 50)
        // this.context.fillText(`Round: ${round}`, 10, 80)
        this.context.clearRect(0, 0, 300, 300)
        this.context.font = "20px Arial";
        this.context.fillText(`Enemy`, 10, 80)
        this.context.fillText(`Speed: ${object.speed}`, 10, 110)
        this.context.fillText(`Health: ${this.hp}`, 10, 140)
    }
}

module.exports = EnemyStats;