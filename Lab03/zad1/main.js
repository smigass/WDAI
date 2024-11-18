let timerStartDate = null
const timerDiv = document.getElementById('timer-div')
console.log(timerDiv)
let mainInterval = setInterval(() => {

},1000)
const startTimer = () => {
    document.getElementById('start').disabled = true
    timerStartDate = new Date();
    mainInterval = setInterval(() => {
        let timeColapsed = new Date() - timerStartDate;
        console.log(timeColapsed)
        let seconds = Math.floor(timeColapsed / 1000)
        let minutes = Math.floor(seconds / 60)
        if (minutes > 0) {
            timerDiv.innerHTML = minutes.toString()+ "m "+ (seconds % 60).toString() + "s "
        }
        else {
            timerDiv.innerHTML = seconds.toString() + "s"
        }

    },10)
}

const stopTimer = () => {
    clearInterval(mainInterval)
    document.getElementById('start').disabled = false
}

const resetTimer = () => {
    timerStartDate = new Date();
}

