const fs = require('fs')
const path = require('path')
const filePath = './lib/routes/'

let routesArray = []
let linksArray = []

fs.readdirSync(filePath).forEach(fileName => {
    if ( path.extname(filePath + fileName) === '.js' ) {
        pageData = require('./routes/' + fileName)
        routesArray.push(pageData.route)
        if ( pageData.linkName ) {
            linksArray.push({ link: pageData.route.path, linkName: pageData.linkName })
        }
    }
})

function getLinks() {
    return linksArray
}

exports.autoLinks = getLinks
exports.routes = routesArray