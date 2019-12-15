const fs = require('fs')
const path = require('path')
const filePath = './lib/model/model-objects/'
const fileExtension = '.js'

let masterModel = new Object()

fs.readdirSync(filePath).forEach(fileName => {
    if ( path.extname(filePath + fileName) === fileExtension ) {
        let modelData = require('./model-objects/' + fileName)
        let itemName = fileName.replace(fileExtension, "")
        masterModel[itemName] = modelData
    }
})

function getModel() {
    return masterModel
}

module.exports = getModel

// Call Path
// node ./lib/model/master-model.js