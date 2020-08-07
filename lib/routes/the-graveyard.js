const routes = require('../routes.js')

pageData = {
    route: {
        method: 'GET',
        path: '/graveyard',
        handler: (request, h) => {
            return h.view('the-graveyard', {
                model: {
                    title: 'The Graveyard',
                    message: "A home for unfinished projects",
                    links: routes.autoLinks(),
                }
            })
        }
    },
    linkName: 'The Graveyard',
}

module.exports = pageData