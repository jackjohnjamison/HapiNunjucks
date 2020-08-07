const pageRoute = require('../page.js')

module.exports = pageRoute({
    path: '/about',
    template: 'about',
    title: 'About',
    message: 'About us :)',
    linkName: 'About us'
})