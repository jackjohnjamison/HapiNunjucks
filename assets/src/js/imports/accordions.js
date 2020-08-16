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