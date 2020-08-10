const accordions = [...document.getElementsByClassName('js-accordion')]

accordions.forEach(accordion => {
    accordion.setAttribute('aria-expanded', 'false')
    accordion.onclick = function() {
        accordion.setAttribute('aria-expanded', !(accordion.getAttribute('aria-expanded') == "true"))
    }
})