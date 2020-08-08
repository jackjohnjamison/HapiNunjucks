const fs = require('fs')
const path = require('path')
const filePath = './lib/routes/'

let routesArray = []
let linksArray = {}

fs.readdirSync(filePath).forEach(fileName => {
    if ( path.extname(filePath + fileName) === '.js' ) {
        pageData = require('./routes/' + fileName)
        routesArray.push(pageData.route)
        if ( pageData.linkText ) {
            linksArray[pageData.pageName] = {
                name: pageData.pageName,
                href: pageData.route.path,
                text: pageData.linkText
            }
        }
    }
})

function getLinks() {
    return linksArray
}

exports.autoLinks = getLinks
exports.routes = routesArray