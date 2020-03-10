const Game = require("./game");
const GameView = require("./game_view");
const Tower = require("./tower")
const Road = require("./road")
const EnemyStats = require("./enemy_stats")
const EnemyStatsView = require("./enemy_stats_view")
const Score = require("./score")
const ScoreView = require("./score_view")
const Stats = require("./stats")
const StatsView = require("./stats_view")
const Instructions = require("./instructions")
const InstructionsView = require("./instructions_view")

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
    function isUpgrade(pos) {
        return pos.x > 10 && pos.x < 95 && pos.y < 45 && pos.y > 23
    }

    const upgrade = (event) => {
        let pos = getMousePos(stats, event)
        if(isUpgrade(pos)){
            alert('Hit upgrade button')
        }
    }


    canvas.addEventListener('click', statsClick)
    stats.addEventListener('click', upgrade)
})