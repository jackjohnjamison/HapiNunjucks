const pageRoute = require('../page.js')

module.exports = pageRoute({
    name: 'graveyard',
    path: '/graveyard',
    template: 'the-graveyard',
    title: 'The Graveyard',
    message: 'The final resting place of unfinished projects.',
    linkText: 'The Graveyard',
})