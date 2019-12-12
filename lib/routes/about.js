const routes = require('../routes.js')

pageData = {
    route: {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return h.view('about', {
                title: 'About',
                message: "About us :)",
                model: routes.autoLinks(),
            })
        }
    },
    linkName: 'About us',
}

module.exports = pageData