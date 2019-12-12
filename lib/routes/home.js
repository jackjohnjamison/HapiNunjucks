const routes = require('../routes.js')

pageData = {
    route: {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
          return h.view('home', {
              title: 'Homepage',
              message: "It's alive!",
              model: {
                links: routes.autoLinks(),
            }
            })
        }
    },
    linkName: 'Home'
}

module.exports = pageData