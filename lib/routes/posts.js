const pageRoute = require('../page.js')

module.exports = pageRoute({
    path: '/posts',
    template: 'posts',
    title: 'Posts',
    message: "Check out these Json posts bro",
    linkName: 'Posts',
    data: ['posts'],
})