const getPosts = require('../get-posts.js')

route = {
    method: 'GET',
    path: '/posts',
    handler: (request, h) => {
        return h.view('posts', {
            title: 'Posts',
            message: "Check out these Json posts bro",
            model: getPosts(),
        })
    }
  }

  module.exports = route