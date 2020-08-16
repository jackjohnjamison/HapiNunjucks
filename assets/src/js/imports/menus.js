import { animateProperty } from './animations'

function menus() {
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

            const menuAnimation = new animateProperty(links, 'marginTop')
        
            setTabbing('-1')
            links.style.marginTop = closeHeight + 'px'
    
            const frameCount = 30
            const interval = closeHeight / frameCount
        
            function openMenu() {
                menuAnimation.animate(interval, openHeight)
                button.setAttribute('aria-expanded', 'true')
                setTabbing('0')
            }
    
            function closeMenu() {
                menuAnimation.animate(interval, closeHeight)
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
        
            document.addEventListener('click', () => {
                if (!container.contains(event.target)) {
                    closeMenu()
                }
            })
        }
    }
    
    slideMenu('js-main-nav', 'js-burger-menu', 'js-burger-menu__links', -1)
    slideMenu('js-main-nav', 'js-settings-menu', 'js-settings-menu__links', -1)
}

export { menus }