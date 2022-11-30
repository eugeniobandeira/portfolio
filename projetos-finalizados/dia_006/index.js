let computerNumber 
let userNumbers = []
let attempts = 0
let maxAttempts = 7
/* let correlacao = Math.floor((userNumber / computerNumber) * 100) */

const newGameBtn = document.getElementById('newGameButton')
const textOutput = document.getElementById('textOutput')
const inputBox = document.getElementById('inputBox')
const spanCorrelacao = document.getElementById('span__correlacao')


function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
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
    

    if (attempts < maxAttempts) {
        if (userNumber > computerNumber) {
            textOutput.innerHTML = 'Seu número é maior 😐😐'
            inputBox.value = ''
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
        } else if (userNumber < computerNumber) {
            textOutput.innerHTML = 'Seu número é menor 🥶🥶'
            inputBox.value = ''
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
        } else {
            textOutput.innerHTML = 'Parabénsss! Você acertou! 🥳🥳👏 👏 👏' 
            attempts ++
            document.getElementById('attempts').innerHTML = attempts
            inputBox.setAttribute('Readonly',  'Readonly')
        }
    } else {
        textOutput.innerHTML = 'Você perdeu! O número era ' + computerNumber + ' tente de novo'
        document.getElementById('inputBox').setAttribute('Readonly',  'Readonly')
    }
        
}