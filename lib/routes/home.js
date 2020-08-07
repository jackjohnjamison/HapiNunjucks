const routes = require('../routes.js')

pageData = {
    route: {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return h.view('home', {
              model: {
                title: 'Homepage',
                message: "It's alive!",
                links: routes.autoLinks(),
              }
            })
        }
    },
    linkName: 'Home'
}

module.exports = pageData