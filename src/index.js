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
    let object
    const handleClick = (event) => {
        let pos = getMousePos(canvas, event)
        let y = Number.parseInt(pos.x / 20)
        let x = Number.parseInt(pos.y / 20)
        if (grid[x][y] === "o") {
            if (money >= 5){
                let tower = new Tower(y, x, canvas)
                grid[x][y] = tower
                object = grid[x][y]
                game.add(tower)
            }
        } else if (grid[x][y] instanceof Tower) {
            object = grid[x][y]
        }
    }

    const handleHover = (event) => {	
        let pos = getMousePos(canvas, event)	
        let y = Number.parseInt(pos.x / 20)	
        let x = Number.parseInt(pos.y / 20)	
        if (grid[x][y] === "o"){
            grid[x][y] = 'h'
        }
        // for (let i = 0; i < grid.length; i++){
        //     for (let j = 0; j < grid[i].length; j++){
        //         if (i != x && j != y && !grid[i][j] === "x"){
        //             grid[i][j] = "o"
        //         }
        //     }
        // }

    }	


    // canvas.addEventListener('mousemove', handleHover)	
    canvas.addEventListener('click', handleClick)
    new GameView(game, context).start();

    const score = document.getElementById("score")
    const scoreContext = score.getContext("2d")
    const scoreEle = new Score(scoreContext)
    new ScoreView(scoreEle).start()

    const stats = document.getElementById("stats")
    const statsContext = stats.getContext("2d")
    let statsEle = new Stats(statsContext, object)
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

    isUpgrade = (pos) => {
        return pos.x > 10 && pos.x < 95 && pos.y < 45 && pos.y > 23
    }

    isSell = (pos) => {
        return pos.x > 100 && pos.x < 140 && pos.y < 45 && pos.y > 23
    }

    const upgrade = (event) => {
        let pos = getMousePos(stats, event)
        if(isUpgrade(pos)){
            newObject = object.upgrade()
            object = newObject
        }
    }

    const sell = (event) => {
        let pos = getMousePos(stats, event)
        if(isSell(pos) && object instanceof Tower) {
            let row = object.col * 1
            let col = object.row * 1
            game.remove(grid[object.col][object.row])
            grid[row][col] = "o"
            object = null

        }
    }

    isGithub = (pos) => {
        return pos.x > 15 && pos.x < 125 && pos.y < 45 && pos.y > 23
    }
    isLinkedIn = (pos) => {
        return pos.x > 145 && pos.x < 290 && pos.y < 45 && pos.y > 23
    }
    const github = (event) => {
        let pos = getMousePos(stats, event)
        if(isGithub(pos)){
            console.log(pos)
        }
    }

    const linkedIn = (event) => {
        let pos = getMousePos(stats, event)
    }

    canvas.addEventListener('click', statsClick)
    stats.addEventListener('click', upgrade)
    stats.addEventListener('click', sell)
    instructions.addEventListener('click', github)
    // instructions.addEventListener('click', linkedIn)
})