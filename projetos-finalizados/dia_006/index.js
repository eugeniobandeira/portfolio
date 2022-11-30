let computerNumber 
let userNumbers = []
let attempts = 0
let maxAttempts = 10
const newGameBtn = document.getElementById('newGameButton')

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}
function newGame() {
    newGameBtn.addEventListener('click', () => {
        window.location.reload()
    })
    
}
function compareNumbers () {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (attempts < maxAttempts) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é maior 😶'
            document.getElementById('inputBox').value = ''
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
        } else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é menor 🥶🥶'
            document.getElementById('inputBox').value = ''
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
        } else {
            document.getElementById('textOutput').innerHTML = 'Parabénsss! Você acertou! 🤩🤩👏 👏 👏' 
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly',  'Readonly')
        }
    } else {
        document.getElementById('textOutput').innerHTML = 'Você perdeu! O número era ' + computerNumber 
        document.getElementById('inputBox').setAttribute('Readonly',  'Readonly')
    }
  
}