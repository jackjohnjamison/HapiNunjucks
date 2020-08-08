const pageRoute = require('../page.js')

module.exports = pageRoute({
    name: 'about',
    path: '/about',
    template: 'about',
    title: 'About',
    message: 'About us :)',
    linkText: 'About'
})