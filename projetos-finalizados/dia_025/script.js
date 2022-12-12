const cor = document.getElementById('color')
const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')
const sizeBtn = document.getElementById('size')
const clearBtn = document.getElementById('clear')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

cor.addEventListener('change', (evt) => color = evt.target.value)

increaseBtn.addEventListener('click', () => {
    size += 5
    if(size > 50) {
        size = 50
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5
    if(size < 5) {
        size = 5
    }
    updateSizeOnScreen()
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0,0, canvas.width, canvas.height)
})

let size = 5
let color = cor
let x 
let y1
let isPressed = false

canvas.addEventListener('mousedown', (evt) => {
    isPressed = true
    
    x = evt.offsetX
    y = evt.offsetY

})
canvas.addEventListener('mouseup', (evt) => {
    isPressed = false
    
    x = undefined
    y = undefined

})
canvas.addEventListener('mousemove', (evt) => {
    if(isPressed) {
        const x2 = evt.offsetX
        const y2 = evt.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
function updateSizeOnScreen() {
    sizeBtn.innerText = size
}