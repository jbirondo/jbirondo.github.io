/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const  MovingObject = __webpack_require__(/*! ./moving_object */ "./src/moving_object.js")
const Tower = __webpack_require__(/*! ./tower */ "./src/tower.js")

class Enemy extends MovingObject {
    constructor(x, y, dx, dy, radius, color, game) {
        super(x, y, dx, dy, radius, color, game)
        this.x = 4;
        this.y = 50;
        this.dx = 1;
        this.dy = 1;
        this.radius = 8;
        this.color = "black"
        this.speed = 1;
        this.hp = 10
        this.game = game
    }

    update(context) {
        if (this.x + this.radius < 498 && this.y === 50) {
            this.x += this.dx;
        }
        // right
        if (this.x === 490 && this.y + this.radius < 318) {
            this.y += this.dy
        }
        // down
        if (this.x + this.radius > 378 && this.y === 310) {
            this.x -= this.dx
        }
        // left
        if (this.x === 370 && this.y + this.radius > 138 && this.y < 330) {
            this.y -= this.dy
        }
        // up
        if (this.x + this.radius > 278 && this.x + this.radius < 379 && this.y === 130) {
            this.x -= this.dx
        }
        // left
        if (this.x === 270 && this.y + this.radius < 318 && this.y > 100 ) {
            this.y += this.dy
        }
        // down
        if (this.x + this.radius > 178 && this.x < 317 && this.y === 310) {
            this.x -= this.dx
        }
        // left
        if (this.x === 170 && this.y + this.radius > 138 && this.y < 338 ) {
            this.y -= this.dy
        }
        // up
        if (this.x + this.radius > 78 && this.x + this.radius < 250 && this.y === 130) {
            this.x -= this.dx
        }
        // left
        if (this.x === 70 && this.y + this.radius < 378 && this.y > 100 ) {
            this.y += this.dy
        }
        // down
        if (this.x + this.radius < 578 && this.y < 371 && this.y > 369) {
            this.x += this.dx;
        }
        // right
        this.draw(context)



        if (this.x === 570 && this.y === 370) {
            lives--
            this.remove()
            if (lives === 0){
                confirm("Game over. Try again")
                window.location.reload()
            }
        }
    }
}
module.exports = Enemy

/***/ }),

/***/ "./src/enemy_stats.js":
/*!****************************!*\
  !*** ./src/enemy_stats.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class EnemyStats {
    constructor(context) {
        this.context = context  
    }

    draw() {
        if (round === 0){
        //     let a = Date.now()
        //     let countdown = Math.floor((startTime - a) / 1000)
        //     let statusBar = Math.floor(countdown % 35)
            // debugger
            // if(countdown >= 0){
            //     this.context.clearRect(0, 0, 300, 300)
            //     this.context.font = "20px Arial";
            //     this.context.fillText(`Round starts in:`, 10, 80)
            //     this.context.fillText(`${countdown} seconds`, 10, 110)
                // this.context.beginPath();
                // this.context.arc(
                //     60,
                //     60,
                //     30,
                //     0,
                //     (2 * Math.PI) * (1 + (-1 * (countdown / 35))),
                //     true
                // );
                // this.context.stroke()
                // (2 * Math.PI) * (1 + (-1 * (this.hp / totalHp)))
            // } else if (countdown === 1) {
                // this.context.clearRect(0, 0, 300, 300)
                // this.context.font = "20px Arial";
                // this.context.fillText(`Round starts in:`, 10, 80)
                // this.context.fillText(`${countdown} second`, 10, 110)
                // this.context.fillRect(50, 50, 50, 50)
            // } else if (countdown < 1){
                // this.context.clearRect(0, 0, 300, 300)
                // this.context.font = "20px Arial";
                // this.context.fillText(`Round starts`, 10, 80)
                // this.context.fillText(`NOW!`, 10, 110)
                // this.context.fillRect(50, 50, 50, 50)
        //     }
        null
        } else {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Enemy`, 10, 80)
            this.context.fillText(`Health: ${(10 * (1 + (0.25 * (round - 1))) )}`, 10, 110)
        }
    }
}

module.exports = EnemyStats;

/***/ }),

/***/ "./src/enemy_stats_view.js":
/*!*********************************!*\
  !*** ./src/enemy_stats_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Enemy = __webpack_require__(/*! ./enemy */ "./src/enemy.js")
const Projectile = __webpack_require__(/*! ./projectile */ "./src/projectile.js")
const Tower = __webpack_require__(/*! ./tower */ "./src/tower.js")

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
                    context.fillStyle = "green"
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

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(/*! ./game */ "./src/game.js");
const GameView = __webpack_require__(/*! ./game_view */ "./src/game_view.js");
const Tower = __webpack_require__(/*! ./tower */ "./src/tower.js")
const Road = __webpack_require__(/*! ./road */ "./src/road.js")
const EnemyStats = __webpack_require__(/*! ./enemy_stats */ "./src/enemy_stats.js")
const EnemyStatsView = __webpack_require__(/*! ./enemy_stats_view */ "./src/enemy_stats_view.js")
const Score = __webpack_require__(/*! ./score */ "./src/score.js")
const ScoreView = __webpack_require__(/*! ./score_view */ "./src/score_view.js")
const Stats = __webpack_require__(/*! ./stats */ "./src/stats.js")
const StatsView = __webpack_require__(/*! ./stats_view */ "./src/stats_view.js")
const Instructions = __webpack_require__(/*! ./instructions */ "./src/instructions.js")
const InstructionsView = __webpack_require__(/*! ./instructions_view */ "./src/instructions_view.js")

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d")
    const game = new Game(context);
    const getMousePos = (canvas, event) => {
        let rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    }
    const handleClick = (event) => {
        let pos = getMousePos(canvas, event)
        let y = Number.parseInt(pos.x / 20)
        let x = Number.parseInt(pos.y / 20)
        if (grid[x][y] === "o") {
            let tower = new Tower(y, x, canvas)
            grid[x][y] = tower
            game.add(tower)
        }
        // else if (grid[x][y] instanceof Tower){	
        //     game.remove(grid[x][y])	
        //     grid[x][y] = "o"	
        // }	
        else if (grid[x][y] instanceof Tower) {
            console.log(grid[x][y])
        }
    }

    // const handleHover = (event) => {	
    //     let pos = getMousePos(canvas, event)	
    //     let y = Number.parseInt(pos.x / 20)	
    //     let x = Number.parseInt(pos.y / 20)	
    //     if (grid[x][y] === "o"){	
    //         context.fillStyle = "red"	
    //         context.strokeRect(x * 20, y * 20, 20, 20)	
    //         context.fillRect(x * 20, y * 20, 20, 20)	
    //     } 	
    // }	


    // canvas.addEventListener('pointermove', handleHover)	
    canvas.addEventListener('click', handleClick)
    new GameView(game, context).start();

    const score = document.getElementById("score")
    const scoreContext = score.getContext("2d")
    const scoreEle = new Score(scoreContext)
    new ScoreView(scoreEle).start()

    const stats = document.getElementById("stats")
    const statsContext = stats.getContext("2d")
    const statsEle = new Stats(statsContext)
    new StatsView(statsEle).start()

    const instructions = document.getElementById("instructions")
    const instructionsContext = instructions.getContext("2d")
    const instructionsEle = new Instructions(instructionsContext)
    new InstructionsView(instructionsEle).start()

    const enemyStats = document.getElementById("enemy")
    const enemyStatsContext = enemyStats.getContext("2d")
    const enemyEle = new EnemyStats(enemyStatsContext)
    new EnemyStatsView(enemyEle).start()

    const statsClick = (event) => {
        let pos = getMousePos(canvas, event)
        let x = pos.x
        let y = pos.y
        let gy = Number.parseInt(pos.x / 20)
        let gx = Number.parseInt(pos.y / 20)
        if (grid[gx][gy] instanceof Tower) {
            statsEle.draw(grid[gx][gy])
        } 
    }
    canvas.addEventListener('click', statsClick)
})

/***/ }),

/***/ "./src/instructions.js":
/*!*****************************!*\
  !*** ./src/instructions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Instructions {
    constructor(context) {
        this.context = context
    }

    draw() {
        this.context.clearRect(0, 0, 900, 200)
        this.context.font = "20px Arial";
        this.context.fillText(`Welcome to JavaScript Tower Defense`, 20, 30);
        this.context.fillText(`Left click on a green tile to create a tower to defend the path`, 20, 60)
    }
}

module.exports = Instructions;

/***/ }),

/***/ "./src/instructions_view.js":
/*!**********************************!*\
  !*** ./src/instructions_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class InstructionsView {
    constructor(instructions, context) {
        this.context = context;
        this.instructions = instructions;
    }

    animate(time) {
        this.instructions.draw();
        this.lastTime = time;
        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = InstructionsView;

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util */ "./src/util.js")

class MovingObject {
    constructor(x, y, dx, dy, radius, hp, color, game) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.game = game;
        this.hp = hp
        this.NORMAL_FRAME_TIME_DELTA = 1000 / 60
    }

    draw(context){
        let totalHp = (10 * (1 + (0.25 * (round - 1))))
        if (Math.floor(totalHp) !== Math.floor(this.hp)){
            context.fillStyle = this.color;
            context.beginPath();
            context.arc(
                this.x, 
                this.y, 
                this.radius, 
                0, 
                (2 * Math.PI) * (1 + (-1 * (this.hp / totalHp))), 
                true
            );
            context.fill();
        } else if (Math.floor(totalHp) === Math.floor(this.hp)) {
            context.fillStyle = this.color;
            context.beginPath();
            context.arc(
                this.x,
                this.y, 
                this.radius, 
                0, 
                2 * Math.PI, 
                true
            );
            context.fill();
        } else if (this.hp < 0) {
            null
        }
    }

    iscollideWith(otherObject) {
        const centerDist = Util.dist([this.x, this.y], [otherObject.x, otherObject.y]);
        return centerDist < (this.radius + otherObject.radius);
    }

    remove() {
        this.game.remove(this);
    };

}

module.exports = MovingObject

/***/ }),

/***/ "./src/projectile.js":
/*!***************************!*\
  !*** ./src/projectile.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject =  __webpack_require__(/*! ./moving_object */ "./src/moving_object.js")

class Projectile extends MovingObject {
    constructor(x, y, dx, dy, radius, color, game) {
        super(x, y, dx, dy, radius, color, game)
        this.radius = 2;
        this.speed = 15
        this.damage = 10
    }
    
}
module.exports = Projectile

/***/ }),

/***/ "./src/road.js":
/*!*********************!*\
  !*** ./src/road.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Road{
    constructor(x, y, canvas){
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d")
        this.fillColor();
    }
    fillColor() {
        this.context.fillStyle = "tan"
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

}
 module.exports = Road

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Score {
    constructor(context) {
        this.context = context
    }

    draw() {
        let a = Date.now()
        let countdown = Math.floor((startTime - a) / 100)
        let statusBar = Math.floor(countdown % 35)
        if (round === 0){
            this.context.clearRect(0, 0, 300 , 100);
            this.context.font = "15px Arial";
            this.context.fillText(`Score: ${score}`, 120, 20);
            this.context.fillText(`Lives: ${lives}`, 120, 50);
            this.context.fillText(`Prepare!`, 20, 50);
            this.context.beginPath();
            this.context.arc(
                50,
                50,
                40,
                0,
                (2 * Math.PI) * (1 + (-1 * (countdown / 350))),
                true
            );
            this.context.lineWidth = 10
            this.context.strokeStyle = "green"
            this.context.stroke()
        } else {
            this.context.clearRect(0, 0, 300 , 100);
            this.context.font = "15px Arial";
            this.context.fillText(`Score: ${score}`, 120, 20);
            this.context.fillText(`Lives: ${lives}`, 120, 50);
            this.context.fillText(`Wave`, 30, 50);
            if (round < 10){
                this.context.fillText(`${round}`, 45, 70)
            } else if (round >= 10 && round < 100) {
                this.context.fillText(`${round}`, 41, 70)
            } else {
                this.context.fillText(`${round}`, 37, 70)
            }
            this.context.beginPath();
            this.context.arc(
                50,
                50,
                40,
                0,
                (2 * Math.PI) * (1 + (-1 * (countdown / 350))),
                true
            );
            this.context.lineWidth = 10
            this.context.strokeStyle = ["black", "brown", "purple", "yellow", "orange"][(round - 1) % 5]
            this.context.stroke()
        }
    }
}

module.exports = Score;

/***/ }),

/***/ "./src/score_view.js":
/*!***************************!*\
  !*** ./src/score_view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

class ScoreView {
    constructor(score, context) {
        this.context = context;
        this.score = score;
    }

    animate(time) {
        this.score.draw();
        this.lastTime = time;
        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
    };
}
module.exports = ScoreView;

/***/ }),

/***/ "./src/stats.js":
/*!**********************!*\
  !*** ./src/stats.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Tower = __webpack_require__(/*! ./tower */ "./src/tower.js")


class Stats {
    constructor(context) {
        this.context = context
    }

    draw(object = null) {
        if (object instanceof Tower) {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.strokeStyle = "black"
            this.context.fillText(`Coords : x:${object.row} y:${object.col}`, 10, 20)
            this.context.fillText(`${object.stage} Tower`, 10, 80)
            this.context.fillText(`Range: ${object.range}`, 10, 110)
            this.context.fillText(`Damage: ${object.dmg}`, 10, 140)
            if (object.stage === "Pawn") {
                this.context.strokeStyle = "blue"
                this.context.fillText(`Upgrade`, 14, 40)
                this.context.strokeRect(10, 23, 85, 22);
                this.context.strokeStyle = "red"
                this.context.fillText(`Sell`, 104, 40)
                this.context.strokeRect(100, 23, 45, 22);
            }
            // this.context.fillRect(this.row * tileSize, this.col * tileSize, tileSize, tileSize);
        } 
    }
}

module.exports = Stats;

/***/ }),

/***/ "./src/stats_view.js":
/*!***************************!*\
  !*** ./src/stats_view.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/tower.js":
/*!**********************!*\
  !*** ./src/tower.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Tower {
    constructor(row, col, canvas) {
        this.row = row;
        this.col = col;
        this.range = 4 * tileSize
        this.dmg = .02
        this.firingRate = 50
        this.canvas = canvas
        this.context = this.canvas.getContext("2d")
        this.stage = "Pawn"
    }

    draw(context) {
        // context.fillStyle = "red"
        // context.strokeRect(this.row * tileSize, this.col * tileSize, tileSize, tileSize);
        // context.fillRect(this.row * tileSize, this.col * tileSize, tileSize, tileSize);
        if (this.stage === "Pawn") {
            context.font = "14px Arial"
            context.fillText("♟", this.row * tileSize, (this.col * tileSize) + tileSize - 4)
        }
    }

    inRange(enemy) {
        const a = enemy.x - ((this.row * 20) + 10) 
        const b = enemy.y - ((this.col * 20) + 10) 
        const dist = Math.sqrt(Math.pow(a , 2) + Math.pow(b, 2))
        if (dist < this.range) {
            return true
        } else {
            return false
        }
    }

    fireProjectile(enemy) {
        if (this.inRange(enemy) === true) {
			this.context.lineWidth = 1
			this.context.strokeStyle = "black"
			this.context.beginPath()
			this.context.moveTo(((this.row * 20) + 10), ((this.col * 20) + 10))
			this.context.lineTo(enemy.x, enemy.y)
            this.context.stroke();
            
            enemy.hp -= this.dmg

            if (enemy.hp <= 0) {
                enemy.remove()
                score++
            }
        }
    }
}

module.exports = Tower

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Util {

    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }

    dist(pos1, pos2) {
        return Math.sqrt(
            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
        );
    }

    norm(vec) {
        return Util.dist([0, 0], vec);
    }

    dir(vec) {
        const norm = Util.norm(vec);
        return Util.scale(vec, 1 / norm);
    }
}

module.exports = Util

/***/ })

/******/ });
//# sourceMappingURL=main.js.map