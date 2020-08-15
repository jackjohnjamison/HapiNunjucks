function pxToInt(pixelString) {
    return parseInt(pixelString.replace('px', ''))
}

// Slide menu
function slideMenu(containerID, buttonID, linksID) {
    const container = document.getElementById(containerID)
    const button = document.getElementById(buttonID)
    const links = document.getElementById(linksID)

    if (container && button && links) {
        // const openHeight = window.getComputedStyle(links).borderBottomWidth
        const openHeight = pxToInt(window.getComputedStyle(links).borderBottomWidth)
        const closeHeight = links.clientHeight + openHeight
        const linkArray = [...links.querySelectorAll('.link-list__item a')]

        function setTabbing(tabIndex) {
            linkArray.forEach(link => {
                link.setAttribute('tabindex', tabIndex)
            })
        }
    
        setTabbing('-1')
        links.style.marginTop = '-' + closeHeight + 'px'

        const frameCount = 30
        const interval = closeHeight / frameCount
        console.log(interval)
    
        function openMenu() {
            let margin = pxToInt(links.style.marginTop)
            let animation = setInterval(frame, 5)
            function frame() {
                if ( pxToInt(links.style.marginTop) >= -openHeight ) {
                    clearInterval(animation)
                    links.style.marginTop = '-' + openHeight + 'px'
                } else {
                    margin += interval
                    links.style.marginTop = margin + 'px'
                }
            }
            button.setAttribute('aria-expanded', 'true')
            setTabbing('0')
        }

        function closeMenu() {
            let margin = pxToInt(links.style.marginTop)
            let animation = setInterval(frame, 5)
            function frame() {
                if ( pxToInt(links.style.marginTop) <= -closeHeight ) {
                    console.log('close over')
                    clearInterval(animation)
                    links.style.marginTop = '-' + closeHeight + 'px'
                } else {
                    console.log(pxToInt(links.style.marginTop), closeHeight)
                    margin -= interval
                    console.log(margin)
                    links.style.marginTop = margin + 'px'
                }
            }
            button.setAttribute('aria-expanded', 'false')
            setTabbing('-1')
        }

        closeMenu()

    
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