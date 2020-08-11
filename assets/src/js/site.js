function toggleAttribute(element, attribute) {
    element.setAttribute(attribute, !(element.getAttribute(attribute) == "true"))
}


function ariaExpandOnClick(element) {
    element.setAttribute('aria-expanded', 'false')
    element.onclick = () => {
        toggleAttribute(element, 'aria-expanded')
    }
}


// Burger Menu
const mainNav = document.getElementById('js-main-nav')
const burgerMenu = document.getElementById('js-burger-menu')
if (mainNav && burgerMenu) {
    ariaExpandOnClick(burgerMenu)
    document.onclick = (event) => {
        if (!mainNav.contains(event.target)) {
            burgerMenu.setAttribute('aria-expanded', 'false')
        }
    }
}


// Accordions
const accordions = [...document.getElementsByClassName('js-accordion')]
accordions.forEach(accordion => {
    ariaExpandOnClick(accordion)
})