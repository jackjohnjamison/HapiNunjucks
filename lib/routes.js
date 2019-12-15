const fs = require('fs')
const path = require('path')
const filePath = './lib/routes/'

let routesArray = []
let linksArray = []

console.log('ran main')

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
    console.log('ran links array')
    return linksArray
}

exports.autoLinks = getLinks
exports.routes = routesArray