// Burger Menu
const mainNav = document.getElementById('js-main-nav')
const burgerMenu = document.getElementById('js-burger-menu')
const menuLinks = mainNav.querySelector('.link-list')

if (mainNav && burgerMenu && menuLinks) {
    const menuLinksOpenHeight = menuLinks.clientHeight + 'px'
    const menuLinksBorderBottomHeight = window.getComputedStyle(menuLinks).borderBottomWidth
    const links = [...menuLinks.querySelectorAll('.link-list__item a')]

    function setTabbing(tabIndex) {
        links.forEach(link => {
            link.setAttribute('tabindex', tabIndex)
        })
    }

    setTabbing('-1')

    function openMenu() {
        menuLinks.style.bottom = '-' + menuLinksOpenHeight
        burgerMenu.setAttribute('aria-expanded', 'true')
        setTabbing('0')
    }
    function closeMenu() {
        menuLinks.style.bottom = '-' + menuLinksBorderBottomHeight
        burgerMenu.setAttribute('aria-expanded', 'false')
        setTabbing('-1')
    }

    burgerMenu.onclick = () => {
        if (burgerMenu.getAttribute('aria-expanded') == "true") {
            closeMenu()
        } else {
            openMenu()
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