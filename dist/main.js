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
    }

    // collideWith(projectile) {
    //     this.hp -= projectile.damage
    //     if (this.hp <= 0) {
    //         this.remove()
    //     }
    // }

    update(context) {
        if (this.x + this.radius < 498 && this.y === 50) {
            this.x += this.dx;
        }
        // right
        if (this.x === 490 && this.y + this.radius < 318) {
            this.y += this.dy
        }
        // // down
        if (this.x + this.radius > 378 && this.y === 310) {
            this.x -= this.dx
        }
        // // left
        if (this.x === 370 && this.y + this.radius > 138 && this.y < 330) {
            this.y -= this.dy
        }
        // // up
        if (this.x + this.radius > 278 && this.x + this.radius < 379 && this.y === 130) {
            this.x -= this.dx
        }
        // // left
        if (this.x === 270 && this.y + this.radius < 318 && this.y > 100 ) {
            this.y += this.dy
        }
        // // down
        if (this.x + this.radius > 178 && this.x < 317 && this.y === 310) {
            this.x -= this.dx
        }
        // // left
        if (this.x === 170 && this.y + this.radius > 138 && this.y < 338 ) {
            this.y -= this.dy
        }
        // // up
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
        }
    }



}
module.exports = Enemy

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
        console.log("inside set_wave")
        setInterval(() => {
        if (this.enemies.length === 0){
            for(let i = 0; i < 10; i ++) {
                let enemy = new Enemy(4, 50, 1, 1, 8, "black", this);
                    this.add(enemy)
                }
            }
        }, 1000)
    }

    next_wave() {
        this.enemies.map(enemy => {
            enemy.hp = enemy.hp * 1.25
        })
    }

    spawn() {
        this.enemies.shift() 
    }

    play() {
        console.log("before game.play set_wave")
        this.set_wave()
        console.log("after game.play set_wave")

        // this.next_wave()
        // console.log("in play before set interval spawn")
        // setInterval(() => {
        //     if (this.enemies.length > 0 ) {
        //         debugger
        //         this.spawn()
        //     }
        // }, 1000);
        // this.lose()

        console.log("before new wave")

        // if (this.enemies.length === 0){
        //     console.log("new wave")
        //     this.play()
        // }
        // if (this.roundOver() === true) {

        //     this.play()
        // }
        console.log("after round over")
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
        // this.game.step(timeDelta);
        this.game.draw(this.grid, this.context);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    };

    start() {
        while( lives > 0 || this.game.enemies.length === 0) {
            console.log("in gameView.start")
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

// import "./score.js/index.js"
const Game = __webpack_require__(/*! ./game */ "./src/game.js");
const GameView = __webpack_require__(/*! ./game_view */ "./src/game_view.js");
const Tower = __webpack_require__(/*! ./tower */ "./src/tower.js")
const Enemy = __webpack_require__(/*! ./enemy */ "./src/enemy.js")
const Score = __webpack_require__(/*! ./score */ "./src/score.js")
const ScoreView = __webpack_require__(/*! ./score_view */ "./src/score_view.js")
const Stats = __webpack_require__(/*! ./stats */ "./src/stats.js")
const StatsView = __webpack_require__(/*! ./stats_view */ "./src/stats_view.js")

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
        let y = Number.parseInt(pos.x/20)
        let x = Number.parseInt(pos.y/20)
        if (grid[x][y] === "o"){ 
            let tower = new Tower(y, x, canvas)
            grid[x][y] = tower
            game.add(tower)
            debugger
        } 
        // else if (grid[x][y] instanceof Tower){
        //     console.log(grid[x][y])
        //     game.remove(grid[x][y])
        //     grid[x][y] = "o"
        // }
        
    }
    //  setInterval(() => {
            
    //     }, 3000);
    canvas.addEventListener('click', handleClick)
    new GameView(game, context).start();

    const score = document.getElementById("score")
    const scoreContext = score.getContext("2d")
    const scoreEle = new Score(scoreContext)
    new ScoreView(scoreEle).start()
    
    const stats = document.getElementById("stats")
    const statsContext = stats.getContext("2d")
    const statsEle = new Stats(statsContext)
    new StatsView(scoreEle).start()
    
    const statsClick = (event) => {
        let pos = getMousePos(canvas, event)
        let x = pos.x
        let y = pos.y
        let gy = Number.parseInt(pos.x / 20)
        let gx = Number.parseInt(pos.y / 20)
        if (grid[gx][gy] instanceof Tower) {
            statsEle.draw(grid[gx][gy])
        } 
        // else if (grid[x][y] instanceof Enemy) {
        //     statsEle.draw(grid[x][y])
        // }

    }
    canvas.addEventListener('click', statsClick)
})


/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(/*! ./util */ "./src/util.js")

class MovingObject {
    constructor(x, y, dx, dy, radius, color, game) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.game = game;
        this.NORMAL_FRAME_TIME_DELTA = 1000 / 60
    }

    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(
            this.x, this.y, this.radius, 0, 2 * Math.PI, true
        );
        context.fill();

    }

    iscollideWith(otherObject) {
        const centerDist = Util.dist([this.x, this.y], [otherObject.x, otherObject.y]);
        return centerDist < (this.radius + otherObject.radius);
    }

    // move(timeDelta) {
    //     const velocityScale = timeDelta / this.NORMAL_FRAME_TIME_DELTA,
    //         offsetX = this.dx * velocityScale,
    //         offsetY = this.dy * velocityScale;

    //     this.x += offsetX; 
    //     this.y += offsetY;
    // };

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
        this.context.clearRect(0, 0, 300 , 100)
        this.context.font = "20px Arial";
        this.context.fillText(`Score: ${score}`, 10, 20);
        this.context.fillText(`Lives: ${lives}`, 10, 50)
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
const Enemy = __webpack_require__(/*! ./enemy */ "./src/enemy.js")

class Stats {
    constructor(context) {
        this.context = context
    }

    draw(object = null) {
        if (object instanceof Tower) {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Tower`, 10, 80)
            this.context.fillText(`Range: ${object.range}`, 10, 110)
            this.context.fillText(`Damage: ${object.dmg}`, 10, 140)
        } else if (object instanceof Enemy) {
            this.context.clearRect(0, 0, 300, 300)
            this.context.font = "20px Arial";
            this.context.fillText(`Enemy`, 10, 80)
            this.context.fillText(`Speed: ${object.speed}`, 10, 110)
            this.context.fillText(`Health: ${object.hp}`, 10, 140)
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
    }

    draw(context) {
        context.fillStyle = "red"
        context.strokeRect(this.row * tileSize, this.col * tileSize, tileSize, tileSize);
        context.fillRect(this.row * tileSize, this.col * tileSize, tileSize, tileSize);
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
                // console.log(enemy)
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