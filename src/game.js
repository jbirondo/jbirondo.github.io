const Enemy = require("./enemy")
const Projectile = require("./projectile")
const Tower = require("./tower")

class Game {
    constructor(context){
        this.context = context
        this.enemies = [];
        this.projectiles = [];
        this.towers = [];
    }


    add(object) {
        if (object instanceof Enemy) {
            this.enemies.push(object);
        } else if (object instanceof Projectile) {
            this.projectiles.push(object);
        } else if (object instanceof Tower) {
            this.towers.push(object);
        } else {
            throw new Error("unknown type of object");
        }
    };

    allObjects() {
        return [].concat(this.enemies, this.projectiles, this.towers);
    };



    checkCollisions() {
        const allObjects = this.allObjects();
        for (let i = 0; i < allObjects.length; i++) {
            for (let j = 0; j < allObjects.length; j++) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];

                if (obj1.isCollidedWith(obj2)) {
                    const collision = obj1.collideWith(obj2);
                    if (collision) return;
                }
            }
        }
    };

    draw(grid, context){
        for(let row = 0; row < grid.length ; row++ ){
            for(let col = 0; col < grid[row].length ; col++) {

                if (grid[row][col] == 'o') {
                    context.fillStyle = "green";
                } else if (grid[row][col] == 'x') {
                    context.fillStyle = "tan";
                } else {
                    context.fillStyle = "red"
                }
                context.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
                context.strokeRect(col * tileSize, row * tileSize, tileSize, tileSize);
            }
        }
        this.allObjects().forEach(object => {
            object.draw(context);
        })
        this.enemies.forEach(enemy => {
            enemy.update(context)
            this.towers.forEach(tower => {
                tower.fireProjectile(enemy)
            })
        })

    }

    remove(object) {
        if (object instanceof Enemy) {
            if (this.enemies.indexOf(object) >= 0) {
                this.enemies.splice(this.enemies.indexOf(object), 1);
            }
        } else if (object instanceof Projectile) {
            this.projectiles.splice(this.projectiles.indexOf(object), 1);
        } else if (object instanceof Tower) {
            this.towers.splice(this.towers.indexOf(object), 1);
        } else {
            throw new Error("unknown type of object");
        }

    };

    set_wave() {
        setInterval(() => {
            if (this.enemies.length === 0){
            console.log("inside set_wave")
            for(let i = 0; i < 10; i ++) {
                let enemy = new Enemy(4, 50, 1, 1, 8, "black", this);
                    this.add(enemy)
                }
            }
        }, 1000)
    }

    createEnemyArr() {
        let enemyArr = []
        for(let i = 0; i < 10; i ++) {
            let enemy = new Enemy(4, 50, 1, 1, 8, "black", this);
            enemyArr.push(enemy)
        }
        return enemyArr
    }

    nextWave(enemies, round) {
        let newEnemies = []
        enemies.forEach(enemy => {
            enemy.hp = enemy.hp * (1 + (0.25 * round)) 
            enemy.color = ["black", "brown", "purple", "yellow", "orange"][round % 5]
            newEnemies.push(enemy)
        })
        return newEnemies
    }

    play() {
        if (this.enemies.length === 0 && lives > 0) {            
            setInterval(() => {
                let enemyArr = this.createEnemyArr()
                enemyArr = this.nextWave(enemyArr, round)
                this.spawn(enemyArr)   
                round++
            }, 35000);
        }
    }

    spawn(enemies) {
        let counter = 0;
        let spawnWave = setInterval(() => {
            if (counter < enemies.length) {
                this.spawnFunc(enemies, counter)
                counter++;
            } else {
                clearInterval(spawnWave)
                counter = 0
            }
        }, 1000);
        spawnWave
    }

    spawnFunc(enemies, counter) {
        this.add(enemies[counter])
    }

    roundOver() {
        this.enemies.length === 0
    }

    lose() {
        lives === 0
    }

}

module.exports = Game;