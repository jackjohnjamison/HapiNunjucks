const pageRoute = require('../page.js')

module.exports = pageRoute({
    name: 'graveyard',
    path: '/graveyard',
    template: 'the-graveyard',
    title: 'The Graveyard',
    message: 'A home for unfinished projects',
    linkText: 'The Graveyard',
})