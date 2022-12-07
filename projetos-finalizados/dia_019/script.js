const smallCups = document.querySelectorAll('.cup-small')
const litros = document.querySelector('#liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((copo,idx) => {
    copo.addEventListener('click', () => highlightCopos(idx))
})

function highlightCopos(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallCups.forEach((copo, idx2) => {
        if(idx2 <= idx) {
            copo.classList.add('full')
        } else {
            copo.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }
  
    if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
    } else {
    remained.style.visibility = 'visible' 
    litros.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
} 
