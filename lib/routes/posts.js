const model = require('../model/master-model.js')()

pageData = {
    route: {
        method: 'GET',
        path: '/posts',
        handler: (request, h) => {
            return h.view('posts', {
                model: {
                    title: 'Posts',
                    message: "Check out these Json posts bro",
                    links: model.getlinks(),
                    posts: model.getposts(),
                },
                debug: function() {return JSON.stringify(model)} // fix me!
            })
        }
    },
    linkName: 'Posts',
    //debug: JSON.stringify([ {links: model.getlinks()}, {posts: model.getposts()} ])
}

module.exports = pageData