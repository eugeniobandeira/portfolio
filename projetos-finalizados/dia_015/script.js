const btnToggle = document.querySelectorAll('.faq-toggle')
const faq = document.querySelectorAll('.faq')

btnToggle.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active')
    })
})