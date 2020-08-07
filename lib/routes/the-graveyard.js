const pageRoute = require('../page.js')

module.exports = pageRoute({
    path: '/graveyard',
    template: 'the-graveyard',
    title: 'The Graveyard',
    message: 'A home for unfinished projects',
    linkName: 'The Graveyard',
})