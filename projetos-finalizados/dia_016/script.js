const tagsElemento = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (evento) => {
    createTags(evento.target.value)
    if(evento.key === 'Enter') {
        setTimeout( () => {
            evento.target.value = ''
        }, 10)

        randomSelect()
    }
})

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
    

        highlightTag(randomTag)
        setTimeout(() => {
            removeHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        })
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}
function removeHighlightTag(tag) {
    tag.classList.remove('highlight')
}

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsElemento.innerHTML = ''

    tags.forEach(tag => {
        const tagEle = document.createElement('span')
        tagEle.classList.add('tag')
        tagEle.innerText = tag
        tagsElemento.appendChild(tagEle)
    })
}