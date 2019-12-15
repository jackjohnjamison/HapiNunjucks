const model = require('../model/master-model.js')()

pageData = {
    route: {
        method: 'GET',
        path: '/posts',
        handler: (request, h) => {
            return h.view('posts', {
                title: 'Posts',
                message: "Check out these Json posts bro",
                model: {
                    links: model.getlinks(),
                    posts: model.getposts(),
                    debug: JSON.stringify([ {links: model.getlinks()}, {posts: model.getposts()} ])
                }
            })
        }
    },
    linkName: 'Posts'
}

module.exports = pageData