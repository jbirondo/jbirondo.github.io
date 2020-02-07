class EnemyStats {
    constructor(context) {
        this.context = context
        // this.enemy = enemy
        // this.hp = enemy.hp
        // this.speed = enemy.speed    
    }

    draw() {
        if(round > 0){
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Enemy`, 10, 80)
            this.context.fillText(`Health: ${(12 * (1 + (0.25 * (round - 1))) )}`, 10, 110)
        }
    }
}

module.exports = EnemyStats;