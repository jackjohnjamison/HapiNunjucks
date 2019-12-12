const getPosts = require('../get-posts.js')

pageData = {
    route: {
        method: 'GET',
        path: '/posts',
        handler: (request, h) => {
            return h.view('posts', {
                title: 'Posts',
                message: "Check out these Json posts bro",
                model: getPosts(),
            })
        }
    },
    linkName: 'Posts'
}

module.exports = pageData