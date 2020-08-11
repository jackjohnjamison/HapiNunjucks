// Burger Menu
const mainNav = document.getElementById('js-main-nav')
const burgerMenu = document.getElementById('js-burger-menu')
const menuLinks = mainNav.querySelector('.link-list')

console.log(mainNav, burgerMenu, menuLinks)

if (mainNav && burgerMenu && menuLinks) {
    

    const menuLinksOpenHeight = '176px' //menuLinks.style.height
    menuLinks.style.display = 'none'
    menuLinks.style.height = '0px'
    menuLinks.style.display = 'block'

    function closeMenu() {
        menuLinks.style.height = '0px'
        burgerMenu.setAttribute('aria-expanded', 'false')
        setTimeout(function(){menuLinks.style.display = 'none'}, 300)
    }

    burgerMenu.setAttribute('aria-expanded', 'false')
    burgerMenu.onclick = () => {
        if (burgerMenu.getAttribute('aria-expanded') == "true") {
            closeMenu()
        } else {
            menuLinks.style.display = 'block'
            burgerMenu.setAttribute('aria-expanded', 'true')
            menuLinks.style.height = menuLinksOpenHeight
        }
    }

    document.onclick = (event) => {
        if (!mainNav.contains(event.target)) {
            closeMenu()
        }
    }
}


// Accordions
function toggleAttribute(element, attribute) {
    element.setAttribute(attribute, !(element.getAttribute(attribute) == "true"))
}


function ariaExpandOnClick(element) {
    element.setAttribute('aria-expanded', 'false')
    element.onclick = () => {
        toggleAttribute(element, 'aria-expanded')
    }
}

const accordions = [...document.getElementsByClassName('js-accordion')]
accordions.forEach(accordion => {
    ariaExpandOnClick(accordion)
})