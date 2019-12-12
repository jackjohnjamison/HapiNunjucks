const Wreck = require('@hapi/wreck')
const fs = require('fs')
const path = require('path')
const testFolder = './lib/routes/'

let routesArray = []
let linksArray = []

fs.readdirSync(testFolder).forEach(fileName => {
    if ( path.extname(testFolder + fileName) === '.js' ) {
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