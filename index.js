const listamenus = document.querySelectorAll(".menu__link")

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const menu__lista = document.querySelector('.menu__lista');
    menuToggle.classList.toggle('active');
    menu__lista.classList.toggle('active');
}

document.querySelector('#items').addEventListener('wheel', event => {
    if (event.deltaY > 0) {
        event.target.scrollBy(310,0)
    } else {
        event.target.scrollBy(-310,0)
    }
})

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 680px)')
if (mediaQuery.matches) {

    listamenus.forEach((item) => {
        item.addEventListener("click", () => {
            toggleMenu()
        })
    })
}

window.addEventListener('resize', function(event) {
    const medidas = window.matchMedia('(max-width: 680px)')
    if (medidas.matches) {
        listamenus.forEach((item) => {
            item.addEventListener("click", () => {
                toggleMenu()
            })
        })
    }

});
