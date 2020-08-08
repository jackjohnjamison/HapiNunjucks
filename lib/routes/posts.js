const pageRoute = require('../page.js')

module.exports = pageRoute({
    name: 'posts',
    path: '/posts',
    template: 'posts',
    title: 'Posts',
    message: "Check out these Json posts bro",
    linkText: 'Posts',
    data: ['posts'],
})