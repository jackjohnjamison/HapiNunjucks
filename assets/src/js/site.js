import { pxToInt } from './utils'

// Slide menu
function slideMenu(containerID, buttonID, linksID, openHeight = 0) {
    const container = document.getElementById(containerID)
    const button = document.getElementById(buttonID)
    const links = document.getElementById(linksID)

    if (container && button && links) {
        const closeHeight = -links.clientHeight + openHeight
        const linkArray = [...links.querySelectorAll('.link-list__item a')]

        function setTabbing(tabIndex) {
            linkArray.forEach(link => {
                link.setAttribute('tabindex', tabIndex)
            })
        }

        let isAnimating = false

        function animateProperty(element, property, step, target) {
            isAnimating = true
            let propertyValue = pxToInt(element.style[property])
            let condition
            if (target > propertyValue) {
                condition = () => {return pxToInt(element.style[property]) >= target}
                step *= -1
            } else {
                condition = () => {return pxToInt(element.style[property]) <= target}
            }
            let animation = setInterval(frame, 10)
            function frame() {
                propertyValue += step
                element.style[property] = propertyValue + 'px'
                if (condition()) {
                    element.style[property] = target + 'px'
                    clearInterval(animation)
                    isAnimating = false
                }
            }
        }
    
        setTabbing('-1')
        links.style.marginTop = closeHeight + 'px'

        const frameCount = 30
        const interval = closeHeight / frameCount
    
        function openMenu() {
            if(!isAnimating) {
                animateProperty(links,'marginTop', interval, openHeight)
                button.setAttribute('aria-expanded', 'true')
                setTabbing('0')
            }
        }

        function closeMenu() {
            if(!isAnimating) {
                animateProperty(links,'marginTop', interval, closeHeight)
                button.setAttribute('aria-expanded', 'false')
                setTabbing('-1')
            }
        }

        closeMenu()

        button.onclick = () => {
            if (button.getAttribute('aria-expanded') == "true") {
                closeMenu()
            } else {
                openMenu()
            }
        }
    
        document.addEventListener('click', () => {
            if (!container.contains(event.target)) {
                closeMenu()
            }
        })
    }
}

slideMenu('js-main-nav', 'js-burger-menu', 'js-burger-menu__links', -3)
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