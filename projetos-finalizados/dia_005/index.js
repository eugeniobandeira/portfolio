const colors = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Gray', 'Coral', 'Orange', 'Darkred', 'White','Blueviolet', 'Brown', 'Pink', 'Yellowgreen']
const btn = document.getElementById('btn')
const yourColor = document.querySelector('.color')

btn.addEventListener('click', () => {
    const randomColor = getRandomNumber()
    document.body.style.background = colors[randomColor]
    yourColor.innerHTML = colors[randomColor]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
