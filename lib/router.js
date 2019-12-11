const Wreck = require('@hapi/wreck')
const fs = require('fs')
const path = require('path')
const testFolder = './lib/routes/'

let routeArray = []

fs.readdirSync(testFolder).forEach(fileName => {
    if ( path.extname(testFolder + fileName) === '.js' ) {
        routeArray.push(require('./routes/' + fileName))
    }
})

module.exports = routeArray