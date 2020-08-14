// Slide menu
function slideMenu(containerID, buttonID, linksID) {
    const container = document.getElementById(containerID)
    const button = document.getElementById(buttonID)
    const links = document.getElementById(linksID)

    if (container && button && links) {
        const linksBorderBottomHeight = window.getComputedStyle(links).borderBottomWidth
        const linksOpenHeight = links.clientHeight + 4 + 'px'
        const linkArray = [...links.querySelectorAll('.link-list__item a')]
    
        function setTabbing(tabIndex) {
            linkArray.forEach(link => {
                link.setAttribute('tabindex', tabIndex)
            })
        }
    
        setTabbing('-1')
    
        function openMenu() {
            links.style.bottom = '-' + linksOpenHeight
            button.setAttribute('aria-expanded', 'true')
            setTabbing('0')
        }
        function closeMenu() {
            links.style.bottom = '-' + linksBorderBottomHeight
            button.setAttribute('aria-expanded', 'false')
            setTabbing('-1')
        }
    
        button.onclick = () => {
            if (button.getAttribute('aria-expanded') == "true") {
                closeMenu()
            } else {
                openMenu()
            }
        }
    
        document.onclick = (event) => {
            if (!container.contains(event.target)) {
                closeMenu()
            }
        }
    }
}

slideMenu('js-main-nav', 'js-burger-menu', 'js-burger-menu__links')
slideMenu('js-main-nav', 'js-settings-menu', 'js-settings-menu__links')

//////////////////////////////////////////////////////////////////////////////

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