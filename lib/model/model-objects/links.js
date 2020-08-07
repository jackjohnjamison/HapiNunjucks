const routes = require('../../routes.js')

function getLinks() {
    links = routes.autoLinks()
    return links
}

module.exports = getLinks