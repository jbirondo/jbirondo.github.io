const Game = require("./game");
const GameView = require("./game_view");
const Tower = require("./tower")
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
    const context = canvas.getContext("2d", {alpha: false})
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

    const canvasHover = (event) => {
        let pos = getMousePos(canvas, event)
        let y = Number.parseInt(pos.x / 20)
        let x = Number.parseInt(pos.y / 20)
        if (grid[x][y] === "o" || grid[x][y] instanceof Tower) {
            document.body.style.cursor = "pointer"
        } else {
            document.body.style.cursor = "auto"
        }
    }

    const scoreHover = (event) => {
        let pos = getMousePos(score, event)
        if (pos.x > 0 && pos.x < 300 && pos.y < 100 && pos.y > 0) {
            document.body.style.cursor = "auto"
        }
    }
    
    const enemyHover = (event) => {
        let pos = getMousePos(enemyStats, event)
        if (pos.x > 0 && pos.x < 300 && pos.y < 100 && pos.y > 0) {
            document.body.style.cursor = "auto"
        }
    }
    new GameView(game, context).start();

    const score = document.getElementById("score")
    const scoreContext = score.getContext("2d", {alpha: false})
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
            if(object.upgradeCost <= money){
                object = object.upgrade()
            } else {
                alert("Not enough money")
            }
        }
        return object
    }

    const upgradeKey = (event) => {
        if(event.key === "u"){
            if(object.upgradeCost <= money){
                newObject = object.upgrade()
                object = newObject = object
            } else {
                alert("Not enough money")
            }
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
        return pos.x > 15.5 && pos.x < 125.5 && pos.y < 95 && pos.y > 66
    }
    isLinkedIn = (pos) => {
        return pos.x > 145.5 && pos.x < 290.5 && pos.y < 95 && pos.y > 66
    }
    const github = (event) => {
        let pos = getMousePos(instructions, event)
        if (isGithub(pos)){
            window.open("https://github.com/jbirondo", "_blank")
        }
    }

    const linkedIn = (event) => {
        let pos = getMousePos(instructions, event)
        if(isLinkedIn(pos)){
            window.open("https://www.linkedin.com/in/eugene-birondo-702637192/", "_blank")
        }
    }

    const instructionsPointer = (event) => {
        let pos = getMousePos(instructions, event)
        if(isGithub(pos) || isLinkedIn(pos)){
            document.body.style.cursor = "pointer"
        } else {
            document.body.style.cursor = "auto"
        }
    }

    const statsPointer = (event) => {
        let pos = getMousePos(stats, event)
        if (isUpgrade(pos) || isSell(pos)) {
            document.body.style.cursor = "pointer"
        } else {
            document.body.style.cursor = "auto"
        }
    }


    canvas.addEventListener('mousemove', canvasHover)
    canvas.addEventListener('click', handleClick)
    canvas.addEventListener('click', statsClick)
    document.addEventListener('keypress', upgradeKey)

    score.addEventListener('mousemove', scoreHover)

    enemyStats.addEventListener('mousemove', enemyHover)

    stats.addEventListener('click', upgrade)
    stats.addEventListener('click', sell)
    stats.addEventListener('mousemove', statsPointer)

    instructions.addEventListener('click', github)
    instructions.addEventListener('click', linkedIn)
    instructions.addEventListener('mousemove', instructionsPointer)
})