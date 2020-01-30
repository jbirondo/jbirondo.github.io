const Enemy = require("./enemy")
const Projectile = require("./projectile")
const Tower = require("./tower")

// let grid;
// grid = [
//     ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",],
//     ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",],
//     ["o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x",],
//     ["o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x",],
//     ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x",],
//     ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",]
// ]

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
            // console.log(this.towers)
            this.towers.forEach(tower => {
                // console.log("something")
                tower.fireProjectile(enemy)
            })
        })
        // this.draw(grid, context)
    }

    // moveObjects(delta) {
    //     this.allObjects().forEach(function (object) {
    //         object.move(delta);
    //     });
    // };

    //add event handler and repaint the canvas


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

    next_wave() {
        return this.createEnemyArr().map(enemy => {
            enemy.hp = enemy.hp * 1.25
        })
    }

    play() {
        let spawn = this.spawn()
        let counter = 0
        if (this.enemies.length === 0 && lives > 20) {
            console.log("hello", this.enemies.length)
            counter++	           
            console.log(counter)	            
            spawn	            
        } else {
            console.log("game.play else statement")
            console.log(counter)
        }
    }

    spawn() {
        let enemies = this.createEnemyArr();
        let counter = 0;
        // let gameLoop = setInterval(() => {
        let spawnWave = setInterval(() => {
            if (counter < enemies.length) {
                this.spawnFunc(enemies, counter)
                counter++;
                console.log("hello from game.spawn if statement", counter)
            } else {
                clearInterval(spawnWave)
                counter = 0
                console.log("hello from game.spawn else statement", counter)
            }
        }, 1000);
        spawnWave
        //     console.log("game.spawn in gameLoop")
        // }, 15000);
        // spawnWave
        // while (this.enemies.length === 0 && lives > 0){
        // gameLoop
        // }
        //     setInterval(() => {
        //         console.log("game.spawn while lopp")
        //         spawnWave
        //     }, 15000);
        // }
        // let spawnOne = setInterval(() => {
        //     this.spawnFunc(enemies, counter)
        // }, 1000);
        // if (counter < enemies.length) {
        //     console.log("inside game.spawn if statement")
        //     spawnOne
        //     counter++
        // } else {
        //     clearInterval(spawnOne)
        //     console.log("inside game.spawn else statement")
        // }
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

    altSpawn () {
        let enemies = this.createEnemyArr()
        let counter = 0
        if (counter < enemies.length) {
            setInterval(() => {
                console.log("inside setTimeout in altSpawn")
                this.add(enemies[counter]);
                counter++;
                console.log(counter);
            }, 1000);
        }
    }

}

module.exports = Game;