let computerNumber 
let userNumbers = []
let attempts = 6
let maxAttempts = 6
document.getElementById('attempts').innerHTML = attempts
/* let correlacao = Math.floor((userNumber / computerNumber) * 100) */

const newGameBtn = document.getElementById('newGameButton')
const textOutput = document.getElementById('textOutput')
const inputBox = document.getElementById('inputBox')
const spanCorrelacao = document.getElementById('span__correlacao')

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function newGame() {
    newGameBtn.addEventListener('click', () => {
        window.location.reload()
    })  
}

function ValidaValorInput() {
    let inputBoxValue = document.getElementById('inputBox').value
    let span = document.getElementById('span')
    let saidaValidacao = inputBoxValue < 0 || inputBoxValue > 100 ? span.innerHTML = 'O valor deve ser entre 0 e 100' : span.innerHTML = ''
}
    
function compareNumbers () {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    /* let spanCorrelacao = correlacao > 80 && correlacao < 120 ? spanCorrelacao.innerHTML = 'Está quente 🔥🔥' : spanCorrelacao.innerHTML = 'Está frio 🧊🧊'
    console.log(spanCorrelacao) */
    
    let contador = attempts - 1
    
    if (contador > 0) {
        if (userNumber > computerNumber) {
            textOutput.innerHTML = 'Seu número é maior 😐😐'
            inputBox.value = ''
            attempts --
            document.getElementById('attempts').innerHTML = contador
        } else if (userNumber < computerNumber) {
            textOutput.innerHTML = 'Seu número é menor 🥶🥶'
            inputBox.value = ''
            attempts --
            document.getElementById('attempts').innerHTML = contador
        }  else {
            textOutput.innerHTML = 'Parabénsss! Você acertou! 🥳🥳👏 👏 👏' 
            attempts --
            document.getElementById('attempts').innerHTML = contador
            inputBox.setAttribute('Readonly',  'Readonly')

        }
    } else if (contador == 0 && userNumber == computerNumber) {
        document.getElementById('attempts').innerHTML = contador
        textOutput.innerHTML = 'Parabénsss! Você acertou! 🥳🥳👏 👏 👏'
        inputBox.setAttribute('Readonly',  'Readonly')
    } else {
        attempts --
        document.getElementById('attempts').innerHTML = contador
        textOutput.innerHTML = 'Você perdeu! O número era ' + computerNumber + ', tente de novo'
        document.getElementById('inputBox').setAttribute('Readonly',  'Readonly')
    }
        
}
