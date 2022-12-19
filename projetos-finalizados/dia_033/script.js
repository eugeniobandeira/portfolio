const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'we love programming'

let idx = 1 
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerHTML = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (evt) => speed = 300/evt.target.value)