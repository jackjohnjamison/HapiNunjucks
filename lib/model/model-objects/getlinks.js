const routes = require('../../routes.js')

function getLinks() {
    links = routes.autoLinks()
    // console.log(links + "In links")
    return links
}

module.exports = getLinks