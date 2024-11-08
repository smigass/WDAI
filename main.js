import Vector from "./model/Vector.js";
import Zombie from "./model/Zombie.js";
import modes from "./model/Options.js";

// DELTA DIFFICULTY --- ticks for diff++
// EASY - 120
// MEDIUM - 90
// HARD - 60
localStorage.clear()
let options = {}

const audio = new Audio('images/sad-music.mp3');

let bestScores = localStorage.getItem('records') !== null ? JSON.parse(localStorage.getItem('records')) : {
    easy: 0,
    medium: 0,
    hard: 0,
    hardcore: 0
}

const menu =document.getElementsByClassName('menu')[0]
const deathScreen = document.getElementsByClassName('death-screen')[0]
const scoreDiv = document.getElementById('score')
const killsDiv = document.getElementById('kills')
const shotsDiv = document.getElementById('shots')
const onTargetDiv = document.getElementById('onTarget')


let currentMode = null
let shotsFired = 0
let onTargetFired = 0
let difficulty = 0
let ticks = 0
let lives = 3
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');
let points = 1000

const updateRecords = () => {
    document.getElementById('easybest').innerHTML = bestScores.easy
    document.getElementById('mediumbest').innerHTML = bestScores.medium
    document.getElementById('hardbest').innerHTML = bestScores.hard
    document.getElementById('hardcorebest').innerHTML = bestScores.hardcore
}
updateRecords()

let crosshair = new Vector(canvas.width / 2, canvas.height / 2)
canvas.addEventListener('click', (e) => {
    handleClick();
})

let buttons = document.getElementsByClassName('mode')
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        quitMenu()
        options = modes[buttons[i].id]
        currentMode = buttons[i].id
        mainGameLoop()
    })
}



const quitMenu = () => {
    menu.style.display = 'none'
    deathScreen.style.display = 'none'
}

canvas.addEventListener('mousemove', (e) => {
    crosshair = new Vector(e.offsetX, e.offsetY)
})


const handleClick = (position) => {
    let reversedZombies = zombies.reverse()
    shotsFired += 1
    for(let i = 0; i < reversedZombies.length; i++) {
        if (reversedZombies[i].isOnCrosshair(crosshair)) {
            onTargetFired += 1
            points += options.COINS_PER_KILL
            zombies = zombies.filter(zombie => zombie !== reversedZombies[i])
            return
        }
    }
    points -= options.SHOOT_COST
}

const handleGameOver = () => {
    audio.play()
    document.getElementsByClassName('rain')[0].style.display = 'block'
    if (points < 0) points = 0
    deathScreen.style.display = 'block'
    scoreDiv.innerText = 'SCORE: ' + points.toString()
    killsDiv.innerText = 'KILLS: ' + onTargetFired.toString()
    shotsDiv.innerText = 'SHOTS FIRED: ' + shotsFired.toString()
    onTargetDiv.innerText = '% ON TARGET: ' + (onTargetFired * 100/shotsFired).toFixed(2).toString()
    if (bestScores[currentMode] < points) {
        document.getElementById('hs').innerText = 'NEW HIGHSCORE!!!'
    }
    bestScores[currentMode] = Math.max(bestScores[currentMode], points)

    localStorage.setItem('records', JSON.stringify(bestScores))
}

const updateGameState = () => {
    zombies.forEach(zombie => {
        if (zombie.currentPosition.x < -zombie.width) {
            lives -= 1
            zombies = zombies.filter(z => z !== zombie)
        }
    })
}

const drawGame = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log(zombies)
    zombies.forEach(zombie => {
        zombie.draw(ctx)
        zombie.update()
    })
    drawCrosshair()
    drawScore()
    drawLives()
}

const drawCrosshair = () => {
    let aim = new Image()
    aim.src = 'images/aim.png'
    ctx.drawImage(
        aim,
        crosshair.x - options.AIM_SIZE / 2,
        crosshair.y - options.AIM_SIZE / 2,
        options.AIM_SIZE,
        options.AIM_SIZE)
}

const drawScore = () => {
    ctx.font = "72px 'Tiny5'"
    ctx.fillStyle = 'white'
    ctx.fillText(points.toString(), 820, 60)
}

const drawLives = () => {
    let fullHeart = new Image()
    let emptyHeart = new Image()
    fullHeart.src = 'images/full_heart.png'
    emptyHeart.src = 'images/empty_heart.png'

    for (let i = 0; i < lives; i++) {
        ctx.drawImage(fullHeart, 20 + 70 * i, 10, 60, 60)
    }
    for (let i = 0; i < 3 - lives; i++) {
        ctx.drawImage(emptyHeart, 20 + 70 * (lives + i), 10, 60, 60)
    }
}

const mainGameLoop = () => {
    updateGameState()
    drawGame()
    if (lives === 0 || points < 0) {
        // KONIEC GRY
        handleGameOver()
        return 0
    }
    ticks += 1
    difficulty = options.START_DIFFICULTY + Math.floor(ticks / options.DELTA_DIFFICULTY) < options.MAX_DIFFICULTY ? options.START_DIFFICULTY + Math.floor(ticks / options.DELTA_DIFFICULTY) : options.MAX_DIFFICULTY
    let opp = Math.random()
    console.log(opp, Math.log(10 + difficulty**2))
    if (opp < Math.log(10 + difficulty**2) / 500){
        zombies.push(
            new Zombie(options.MAX_ZOMBIE_SPEED, options.MIN_ZOMBIE_SIZE)
        )
    }
    requestAnimationFrame(mainGameLoop)
}
let zombies = []

